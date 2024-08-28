// src/app/api/create-site/route.ts
import prisma from '@/utils/db';
import { NextResponse } from 'next/server';

interface VideoData {
  url: string;
  name: string;
  duration: number;
}

export async function GET() {
  try {
    const videos = await prisma.video.findMany();

    // Retornar sucesso
    return NextResponse.json(videos, { status: 200 });
  } catch (error) {
    // Erro inesperado
    return NextResponse.json(
      {
        type: 'serverError',
        message: 'Erro interno do servidor',
        status: 500,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { url, name, duration }: VideoData = await request.json();

    const video = await prisma.video.create({
      data: {
        duration,
        url,
        name,
      },
    });

    // Retornar sucesso
    return NextResponse.json(video, { status: 200 });
  } catch (error) {
    // Erro inesperado
    return NextResponse.json(
      {
        type: 'serverError',
        message: 'Erro interno do servidor',
        status: 500,
      },
      { status: 500 }
    );
  }
}
