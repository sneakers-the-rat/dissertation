import React, { useState, useEffect } from "react";

import anime from "animejs";
import { ReactSVG } from "react-svg";
import { SlideContext } from "spectacle";
import { useSteps } from "spectacle";
import * as RA from 'ramda-adjunct';


export default function SvgAnimator({
  svgUrl,
  steps = [],
  nSteps,
  id = "animated-svg",
  stepIndex,
    ...rest
}) {
  const numberOfSteps = nSteps ? nSteps : steps.length

  const { activeStepIndex, isSlideActive } = React.useContext(SlideContext);
  const [initialized, setInitialized] = React.useState(false);
  const [injected, setInjected] = React.useState(false);

  const { stepId, isActive, stepNum, placeholder } = useSteps(numberOfSteps, {
    stepIndex,
  });
  let animeSteps = React.useRef([]);
  let activeStep = React.useRef(null);
  const svg = React.useRef()

  useEffect(() => {
    // console.log('steps', steps)
    if (isSlideActive === true && (activeStepIndex-1 in steps || activeStepIndex === 0)){
      // console.log("calling", id, activeStepIndex, animeSteps, activeStep, stepId);
      try {
        setStep(activeStepIndex);
      } catch (e) {
        console.log(e);
      }}
  }, [activeStepIndex]);

  // componentDidMount/dismount
  useEffect(() => {
    const animeSelectors = [... new Set(RA.flattenDepth(2, steps).map(anim => anim.targets))];
    // list of selectors from animations to clean up on dismount

    // reset()

    // setInitialized(true)


    // clean up when dismounted
    return () => {
      // console.log('cleaning svg animator', animeSelectors)
      animeSelectors.map(selector => anime.remove(selector))
    }
  }, [])

  // useEffect(() => {
  //   if (initialized === false && injected === true){
  //     reset()
  //     setInitialized(true)
  //   }
  // }, [injected])

  const reset = () => {
    // console.log('resetting svg', id)
    steps.reverse().forEach((step_opts) => {
      for (let step of step_opts) {
        anime.remove(step.targets);
        let animeStep = anime({
          ...step,
          autoplay: false,
        });
        animeStep.seek(step.duration);
        animeStep.seek(0);

        // console.log(animeStep)

      }
    });
    steps.reverse();
    activeStep.current = 0;
  }


  const setStep = (stepIdx) => {
    let tempActiveStep = activeStep.current;
    if (tempActiveStep === null || (stepIdx === 0 && !(tempActiveStep > 0))){
      reset();
      tempActiveStep = 0;
    }
    // console.log('setstep', stepIdx, activeStepIndex, activeStep, tempActiveStep, steps, svg)

    // convert -infinity given preinit
    if (!isFinite(stepIdx)) {
      stepIdx = 0;
    }

    let a_step;

    //  call all the intermediate steps
    // --------------------------------------
    // increment step
    if (stepIdx > tempActiveStep) {
      for (let i = tempActiveStep; i < stepIdx; i++) {
        for (let step_opts of steps[i]) {
          a_step = anime({
            ...step_opts,
            autoplay: false,
          });
          // console.log('stepping forward', id,  a_step, i, stepIdx)
          if (i === stepIdx-1) {
            a_step.play();
          } else {
            a_step.seek(a_step.duration)
          }
        }
      }
      // --------------------------------------
      //  decrement step
    } else if (stepIdx < tempActiveStep) {
      for (let i = tempActiveStep - 1; i >= stepIdx; i--) {
        for (let step_opts of steps[i]) {
          anime.remove(step_opts.targets);

          // console.log('stepping back', id, step_opts, i, stepIdx)

          // if not looping, play the animation backwards
          if (step_opts.loop !== true) {
            a_step = anime({
              ...step_opts,
              autoplay: false,
            });
            a_step.reverse();
            a_step.seek(a_step.duration);
            a_step.delay=0;

            a_step.play();
          }
        }
      }
    }
    activeStep.current = stepIdx;
  };


  return (
    <div>
      {" "}
      {placeholder}{" "}
      <ReactSVG
          ref={svg}
        key={id + "onlysvg"}
        className={"animated-svg"}
        id={id}
        src={svgUrl}
        renumerateIRIElements={false}
          {...rest}
      />{" "}
    </div>
  );
}
