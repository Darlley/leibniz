import { auth } from '@/auth';
import prisma from '@/utils/prisma';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

interface VideoData {
  url: string;
  name: string;
  duration: number;
}

export async function GET() {
  try {
    const session = await auth();

    if (!session) {
      return redirect('/signin');
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email!,
      },
    });
    if (!user) {
      return NextResponse.json(
        {
          type: 'UserNotFound',
          message: 'User Not Found',
          status: 404,
        },
        { status: 404 }
      );
    }

    const videos = await prisma.video.findMany({
      where: {
        userId: user?.email!,
      },
    });

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
    const session = await auth();

    if (!session) {
      return redirect('/signin');
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email!,
      },
    });
    if (!user) {
      return NextResponse.json(
        {
          type: 'UserNotFound',
          message: 'User Not Found',
          status: 404,
        },
        { status: 404 }
      );
    }

    const { url, name, duration }: VideoData = await request.json();

    const video = await prisma.video.create({
      data: {
        duration,
        name,
        url,
        userId: user?.id,
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
