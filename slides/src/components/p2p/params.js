export const dataset_params = {
  block_size: 50,
  header_height: 50,
  padding: 10,
  block_hover: {
    scale: 1.4,
    duration_enter: 300,
    duration_exit: 500,
    elasticity: 400,
  },
  header_hover: {
    scale: 1,
  },
  unscatter_delay_scale: 1,
};

export const peer_params = {
  inner_radius_scale: 10,
  outer_radius_scale: 30,
  padding: 10,
  send_duration:500,
  inner_hover: {
    scale: 1.1,
    duration_enter: 300,
    duration_exit: 500,
    elasticity: 400,
  },
  ds_scale: 0.08,
  window:{
    width:200,
    height:400,
  },
  pulse:{
    in:{
      duration: 1000,
      color: "#ff0000",
      opacity: 0.5
    },
    fade:{
      duration: 500,
      color: "#000000",
      opacity: 0.2
    },
    out:{
      duration:10000,
      color: "#000000",
      opacity: 0
    },
  }
};

export const swarm_params = {

}
