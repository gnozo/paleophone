import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function LucidStrata() {
  const { locale } = useRouter()
  const fr = locale === 'fr'

  return (
    <Layout>
      <p className="small-label" style={{ color: 'var(--violet)' }}>
        <Link href="/outils" style={{ color: 'var(--violet)', borderBottom: 'none' }}>
          ← {fr ? 'Médias Obsolètes' : 'Obsolete Media'}
        </Link>
      </p>

      <h2 style={{ color: 'var(--cyan)', textShadow: '2px 2px 0 var(--magenta)' }}>
        LucidStrata
      </h2>

      <p className="caption" style={{ fontSize: '17px', marginBottom: '32px' }}>
        {fr ? 'Shader d\'archéologie visuelle' : 'Visual archaeology shader'}
      </p>

      {fr ? (
        <>
          <p>
            <strong>LucidStrata</strong> est un outil de traitement d'images inspiré de
            DStretch, un logiciel utilisé en archéologie rupestre pour révéler des
            peintures effacées par le temps sur les parois des grottes.
          </p>
          <p>
            Le principe : redistribuer l'espace chromatique d'une photographie de manière
            à faire ressortir des strates de couleur imperceptibles dans l'image d'origine.
            Là où DStretch révèle des pigments anciens, LucidStrata révèle la matière
            chromatique latente d'une image contemporaine.
          </p>
          <p>
            L'outil a été développé pour la direction artistique de l'album
            <em> Wahem El Masir</em> et la série photographique <em>Gabadji</em>
            d'Alexandre Efrati. Il permet de désidentifier partiellement les images de
            leur contexte documentaire pour les pousser vers une lecture plastique.
          </p>
          <p>
            LucidStrata fonctionne dans le navigateur. Aucune donnée n'est transmise.
            Glisser-déposer une image pour commencer.
          </p>
        </>
      ) : (
        <>
          <p>
            <strong>LucidStrata</strong> is an image processing tool inspired by
            DStretch, a software used in rock-art archaeology to reveal paintings
            erased by time on cave walls.
          </p>
          <p>
            The principle: redistribute the chromatic space of a photograph to bring
            out colour strata imperceptible in the original image. Where DStretch
            reveals ancient pigments, LucidStrata reveals the latent chromatic matter
            of a contemporary image.
          </p>
          <p>
            The tool was developed for the art direction of the album
            <em> Wahem El Masir</em> and the photographic series <em>Gabadji</em>
            by Alexandre Efrati. It partially deidentifies images from their documentary
            context to push them toward a plastic reading.
          </p>
          <p>
            LucidStrata runs in the browser. No data is transmitted.
            Drag and drop an image to begin.
          </p>
        </>
      )}

      <div style={{
        marginTop: '40px',
        padding: '28px',
        border: '1px dashed var(--cyan)',
        background: 'rgba(0, 255, 204, 0.03)',
      }}>
        <p className="small-label" style={{ color: 'var(--cyan)' }}>
          {fr ? 'Ouvrir l\'outil' : 'Open the tool'}
        </p>
        <p style={{ marginBottom: '14px', fontSize: '14px', color: 'var(--gray-relu)' }}>
          {fr
            ? 'S\'ouvre en plein écran dans un nouvel onglet. Chrome / Firefox / Safari récent recommandé.'
            : 'Opens fullscreen in a new tab. Recent Chrome / Firefox / Safari recommended.'}
        </p>
        <a
          href="/luciDStrata/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '14px 28px',
            background: 'var(--cyan)',
            color: 'var(--bg)',
            fontFamily: "'Unbounded', sans-serif",
            fontWeight: 800,
            fontSize: '14px',
            letterSpacing: '0.1em',
            textDecoration: 'none',
            borderBottom: 'none',
            transition: 'background 0.2s',
          }}
          className="lucid-launch"
        >
          LANCER LUCIDSTRATA →
        </a>
      </div>

      <style jsx>{`
        :global(.lucid-launch:hover) {
          background: var(--hot) !important;
          color: var(--white) !important;
        }
      `}</style>
    </Layout>
  )
}
