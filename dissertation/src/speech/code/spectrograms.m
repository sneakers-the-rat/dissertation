% cut from '{speaker 3 name}_Full_Denoise.wav' - a(floor(8.119151*fs1):ceil(8.607604*fs1),1);
[a, fs1] = audioread('../audio/1_original.wav');

% cut from 'calibration_sound_click.wav' - b(floor(18.260037*fs2):ceil(18.705967*fs2),1);
[b, fs2] = audioread('../audio/2_pshift.wav');

% cut from 'calibrate_box3_cut.wav' - c(floor(18.260037*fs3):ceil(18.705967*fs3),1);
[c, fs3] = audioread('../audio/3_boxrecord.wav');

% preemphasis
c = filter([1 -0.95],1,c);
figure
subplot(1,3,1)
spectrogram(a, hamming(1024).',800, 2000, fs1, 'yaxis', 'MinThreshold', -110)
ylim([0,4.8])
colormap('bone')

subplot(1,3,2)
spectrogram(b, hamming(128).', 64, 2000, fs2, 'yaxis', 'MinThreshold', -120)
ylim([0,48])
colormap('bone')

subplot(1,3,3)
spectrogram(c, hamming(128).', 64, 2000, fs3, 'yaxis', 'MinThreshold', -110)
ylim([0,48])
colormap('bone')
