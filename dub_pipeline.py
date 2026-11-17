"""
AWS SAA-C03 Video Dubbing Pipeline
Dubs YouTube video segments with an Afro-Euro female neural voice (Microsoft Leah/Ezinne).
"""

import sys
import os
import argparse
import asyncio
import subprocess
import yt_dlp
import edge_tts

DEFAULT_VOICE = "en-ZA-LeahNeural" # High quality Afro-Euro female voice
FALLBACK_VOICE = "en-NG-EzinneNeural"

VIDEOS = {
    "video1": {
        "url": "https://youtu.be/rbVhe5gJrZs",
        "title": "AWS SAA-C03 ONE SHOT Marathon (250+ Questions)"
    },
    "video2": {
        "url": "https://www.youtube.com/watch?v=YDxTIgENyjw",
        "title": "AWS Solutions Architect Associate Full Course [6.5 Hours]"
    }
}

async def generate_speech(text, voice, out_audio_path):
    print(f"[*] Generating narration with voice: {voice}...")
    communicate = edge_tts.Communicate(text, voice)
    await communicate.save(out_audio_path)
    print(f"[+] Audio generated at: {out_audio_path}")

def get_stream_url(video_url):
    print(f"[*] Resolving YouTube stream URL for {video_url}...")
    ydl_opts = {'format': '230/134/bestvideo[height<=480]'}
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(video_url, download=False)
        return info['url']

def extract_and_mux(m3u8_url, start_sec, duration_sec, audio_path, output_mp4):
    temp_video = "temp_video_clip.mp4"
    print(f"[*] Extracting video segment (start={start_sec}s, duration={duration_sec}s)...")
    cmd_extract = [
        'ffmpeg', '-y',
        '-ss', str(start_sec),
        '-i', m3u8_url,
        '-t', str(duration_sec),
        '-c:v', 'copy',
        '-an',
        temp_video
    ]
    subprocess.run(cmd_extract, check=True)

    print(f"[*] Muxing dubbed audio into final MP4...")
    cmd_mux = [
        'ffmpeg', '-y',
        '-i', temp_video,
        '-i', audio_path,
        '-c:v', 'copy',
        '-c:a', 'aac',
        '-shortest',
        output_mp4
    ]
    subprocess.run(cmd_mux, check=True)
    if os.path.exists(temp_video):
        os.remove(temp_video)
    print(f"[SUCCESS] Dubbed video generated: {output_mp4} ({os.path.getsize(output_mp4)/1024/1024:.2f} MB)")

async def main_async():
    parser = argparse.ArgumentParser(description="Dub AWS YouTube Videos with Afro-Euro Female Voice")
    parser.add_argument("--video", choices=["video1", "video2"], default="video1", help="Which video to dub")
    parser.add_argument("--start", type=int, default=25, help="Start offset in seconds")
    parser.add_argument("--duration", type=int, default=60, help="Duration in seconds")
    parser.add_argument("--text", type=str, default="", help="Custom script text for dubbing")
    parser.add_argument("--voice", type=str, default=DEFAULT_VOICE, help="TTS Voice (default: en-ZA-LeahNeural)")
    parser.add_argument("--out", type=str, default="", help="Output MP4 file path")

    args = parser.parse_args()

    v_info = VIDEOS[args.video]
    if not args.text:
        if args.video == "video1":
            text = (
                "Welcome to the AWS Solutions Architect Associate SAA-C03 Marathon with over 250 exam questions. "
                "Question 1: A solutions architect is designing a solution where users will be directed to a backup static error page if the primary website is unavailable. "
                "The primary website's DNS records are hosted in Amazon Route 53, pointing to an Application Load Balancer. "
                "Which configuration meets the company's needs with minimal changes and infrastructure overhead? "
                "The correct answer is Option B: configure Route 53 active-passive failover with an Amazon S3 static website hosting bucket."
            )
        else:
            text = (
                "Welcome to the AWS Certified Solutions Architect Associate Complete Course Practice Exam. "
                "Scenario: Four independent teams must each receive every order event. "
                "One team's consumer is regularly offline for maintenance windows of up to 2 hours, and no event may be lost. "
                "Which architecture meets these requirements? "
                "The correct answer is Option C: An SNS topic with four SQS queues subscribed, one per team."
            )
    else:
        text = args.text

    out_file = args.out if args.out else f"{args.video}_dubbed_afro_euro.mp4"
    temp_audio = "temp_dub_audio.mp3"

    await generate_speech(text, args.voice, temp_audio)
    stream_url = get_stream_url(v_info["url"])
    extract_and_mux(stream_url, args.start, args.duration, temp_audio, out_file)
    if os.path.exists(temp_audio):
        os.remove(temp_audio)

def main():
    asyncio.run(main_async())

if __name__ == '__main__':
    main()
