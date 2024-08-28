'use client';

import { Button, Input } from '@nextui-org/react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

import { LoginProps } from './Login.types';
export default function Login(props: LoginProps) {
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

            <form>
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
            </form>
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
                alguém, em um ambiente como o dela, com distrações constantes, pouco apoio social e obrigações contínuas, conseguia dar um jeio de se concentrar por tempo suficiente não apenas para aprender uma variedade impressionante de assuntos, mas de maneira tão profunda que o matemático frances Siméon Poisson certa vez comentou que "Não havia vinte homens na França capazes de ler o livro [dela]"
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
