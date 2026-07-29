import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { CaseStudyTabs, CaseStudyBody, CaseStudyCTA } from '../../components/caseStudySections'
import { USE_CASES, USE_CASE_BY_ID } from '../../config/useCases'

// One statically-generated, separately-indexable page per audience.
// getStaticProps passes only the id (the study data holds React components,
// which aren't JSON-serializable) — content is looked up at render time.
export default function CaseStudyPage({ id }) {
  const u = USE_CASE_BY_ID[id]
  if (!u) return null

  const url = `https://kabonshare.com/case-studies/${u.slug}/`
  const title = u.seo?.title ? `${u.seo.title} | KabonShare` : `${u.label} — KabonShare`
  const description = u.seo?.description || u.menuDesc

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
        <CaseStudyTabs activeId={id} />
        <CaseStudyBody id={id} />
        <CaseStudyCTA />
        <Footer />
      </main>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: USE_CASES.map((u) => ({ params: { slug: u.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const u = USE_CASES.find((x) => x.slug === params.slug)
  if (!u) return { notFound: true }
  return { props: { id: u.id } }
}
