import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

const ffmpeg = createFFmpeg({ log: true });

async function getFile(filename) {
    return await fetchFile('./' + filename)
}

async function loadFiles(fileList) {
    for (const filename of fileList) {
        console.log(filename);
        ffmpeg.FS('writeFile', filename, await getFile(filename));
    }
}

async function writeOutputFile(output_filename) {
    var output_file = ffmpeg.FS('readFile', output_filename);
    if (!output_file) {
        console.error('file failed to create');
        throw new Error();
    }

    // await fs.promises.writeFile('./' + output_filename, output_file);
}

async function runEncode(gif_filename, audio_filename, output_filename) {

    await ffmpeg.run(
        '-stream_loop', '-1',
        '-i', gif_filename,
        '-i', audio_filename,
        '-shortest',
        '-movflags', 'faststart',
        '-pix_fmt', 'yuv420p',
        '-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2',
        output_filename);
}

export async function convert(gif_filename, audio_filename, output_filename) {
    await ffmpeg.load();
    await loadFiles([gif_filename, audio_filename]);
    await runEncode(gif_filename, audio_filename, output_filename);
    await writeOutputFile(output_filename);

    process.exit(0);
}