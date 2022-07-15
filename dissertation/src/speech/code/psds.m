% cut from '{speaker 3 name}_Full_Denoise.wav' - a(floor(8.119151*fs1):ceil(8.607604*fs1),1);
[a, fs1] = audioread('../audio/1_original.wav');

% cut from 'calibration_sound_click.wav' - b(floor(18.260037*fs2):ceil(18.705967*fs2),1);
[b, fs2] = audioread('../audio/2_pshift.wav');

% cut from 'calibrate_box3_cut.wav' - c(floor(18.260037*fs3):ceil(18.705967*fs3),1);
[c, fs3] = audioread('../audio/3_boxrecord.wav');

% preemphasis for recorded sound
c = filter([1 -0.95],1,c);

% normalize mean power to 1
a = a.*(1/(sum(a.^2)/length(a)));
b = b.*(1/(sum(b.^2)/length(b)));
c = c.*(1/(sum(c.^2)/length(c)));

% computer power spectrum
[psda, fa] = pwelch(a, hamming(1024).',800,2000,fs1, 'power');
[psdb, fb] = pwelch(b, hamming(128).', 64, 2000,fs2, 'power');
[psdc, fc] = pwelch(c, hamming(128).', 64, 2000,fs3, 'power');

% make figure
figure
% original audio is on a different frequency range than the others
% so make two axes
ax1 = gca; 
ax1.YLim = [0,4800];
ax1.XLim = [-5,32];
line(pow2db(psda), fa, 'Color', 'k', 'Parent', ax1)

% second axis for pitch shifted sounds
% https://www.mathworks.com/help/matlab/creating_plots/graph-with-multiple-x-axes-and-y-axes.html
ax1_pos = ax1.Position;
ax2 = axes('Position', ax1_pos,...
    'YAxisLocation','right',...
    'XAxisLocation','top',...
    'Color','none');
ax2.YLim = [0, 48000];
ax2.XLim = [-5,32];


line(pow2db(psdb), fb, 'Color', [238/255, 53/255,   46/255], 'Parent', ax2)
line(pow2db(psdc), fc, 'Color', [0,       161/255, 222/255], 'Parent', ax2)

linkaxes([ax1, ax2], 'x');
