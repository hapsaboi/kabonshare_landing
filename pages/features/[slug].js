import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { FeatureTabs, FeatureBody, FeatureCTA } from '../../components/featureSections'
import { FEATURES, FEATURE_BY_ID } from '../../config/features'

// One statically-generated, separately-indexable page per feature.
// getStaticProps only passes the id (feature objects hold React icon
// components, which aren't JSON-serializable) — we look the feature up from
// the shared config at render time.
export default function FeaturePage({ id }) {
  const f = FEATURE_BY_ID[id]
  if (!f) return null

  const url = `https://kabonshare.com/features/${f.slug}/`
  const title = f.seo?.title ? `${f.seo.title} | KabonShare` : `${f.label} — KabonShare`
  const description = f.seo?.description || f.hero.desc

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-page pt-[68px]">
        <FeatureTabs activeId={f.id} />
        <FeatureBody f={f} />
        <FeatureCTA />
        <Footer />
      </main>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: FEATURES.map((f) => ({ params: { slug: f.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const f = FEATURES.find((x) => x.slug === params.slug)
  if (!f) return { notFound: true }
  return { props: { id: f.id } }
}
