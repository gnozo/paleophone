// Outils statiques de public/ servis à l'adresse courte : paleophone.fr/eidolon/ -> public/eidolon/index.html
import type { GetServerSideProps } from 'next'
import { promises as fs } from 'fs'
import path from 'path'

const OUTILS = ['eidolon', 'diaclase', 'luciDStrata', 'datafarmingsimulator']

export const getServerSideProps: GetServerSideProps = async ({ params, res }) => {
  const outil = String(params?.outil || '')
  if (!OUTILS.includes(outil)) return { notFound: true }
  const html = await fs.readFile(path.join(process.cwd(), 'public', outil, 'index.html'), 'utf8')
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate')
  res.end(html)
  return { props: {} }
}

export default function Outil() { return null }
