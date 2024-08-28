'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { LoginProps } from './Login.types';
export default function Login(props: LoginProps) {
  const router = useRouter();

  return (
    <main className="flex overflow-hidden flex-grow h-screen w-full">
      <div className="flex items-center justify-center w-full md:w-1/2">
        <div className="w-full max-w-md mx-4 md:w-8/12 h-max">
          <div className="text-center relativew-full">
            <div>
              <h2 className="mb-2 text-2xl font-semibold text-default-600">
                Acessar Painel
              </h2>
              <p className="mb-10 font-medium text-default-500">
                Olá! <span className="text-4xl">👋</span> Informe seus dados de
                acesso.
              </p>
            </div>

            {/* <form onSubmit={handleSubmit(handleSubmitForm)}>
              <div className="flex flex-col w-full gap-4 mb-6 text-left md:flex-nowrap md:mb-0">
                <Input
                  type="email"
                  label="Email"
                  labelPlacement="outside"
                  size="lg"
                  isRequired
                  classNames={{
                    input:
                      'focus:ring-0 inline-block outline-none border-none autofill:bg-transparent',
                  }}
                  {...register('email')}
                />

                <Input
                  type="password"
                  label="Senha"
                  labelPlacement="outside"
                  isRequired
                  size="lg"
                  classNames={{
                    input:
                      'focus:ring-0 inline-block outline-none border-none autofill:bg-transparent',
                  }}
                  {...register('password')}
                />

                <div className="space-y-1">
                  <Button
                    type="submit"
                    size="lg"
                    fullWidth={true}
                    color="primary"
                    radius="full"
                    className="font-bold"
                  >
                    Acessar
                  </Button>
                  <p className="text-xs text-center text-danger">
                    Verifique se o seu email ou senha estão corretos.
                  </p>
                </div>

              </div>
            </form> */}

            <button
              onClick={() => signIn('github', {
                callbackUrl: '/'
              })}
              className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] py-4 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
            >
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-semibold leading-6">GitHub</span>
            </button>

            <div className="mt-2 space-y-2">
              <p className="font-medium text-center">
                <Link
                  href={'/forgot-password'}
                  className="inline-block text-primary-500 transition-all duration-100 hover:brightness-90"
                >
                  Esqueci minha senha
                </Link>
              </p>
              <p className="font-medium text-center">
                <Link
                  href={'/signup'}
                  className="inline-block text-primary-500 transition-all duration-100 hover:brightness-90"
                >
                  Criar conta
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden w-1/2 h-full md:block bg-gradient-to-tr from-primary-500 to-primary-800">
        <div className="relative flex flex-col justify-center h-full px-20">
          <AnimatePresence mode="wait">
            <motion.div
              className="max-w-xl"
              key={'Newton'}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <p className="mb-8 text-xl font-extralight leading-10 text-white">
                Nos anais de concentração extrema, costuma-se evocar uma imagem
                de gênios solitários trabalhando sem distrações, libertos das
                preocupações mundanas. Por mais memorável que isso seja, estou
                mais interessado no tipo que Somerville parecia ter. Como
                alguém, em um ambiente como o dela, com distrações constantes,
                pouco apoio social e obrigações contínuas, conseguia dar um jeio
                de se concentrar por tempo suficiente não apenas para aprender
                uma variedade impressionante de assuntos, mas de maneira tão
                profunda que o matemático frances Siméon Poisson certa vez
                comentou que "Não havia vinte homens na França capazes de ler o
                livro [dela]"
              </p>
              <div className="flex items-center mb-12">
                <div>
                  <h4 className="text-lg font-semibold leading-6 text-white">
                    Scott H. Young
                  </h4>
                  <span className="text-xs font-semibold text-gray-100">
                    Ultra-Aprendizado, página 92.
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
