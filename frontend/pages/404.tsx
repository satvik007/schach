import Link from 'next/link'

export default function Page() {
  return (
    <section className="page_404">
      <div className="404-container">
        <div className="404-row">
          <div className="col-sm-12">
            <div className="styles.col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg" />

              <div className="constant_box_404">
                <h3 className="text-4xl">Looks like you&apos;re lost!</h3>

                <Link href="/">
                  <a className="link_404">Go to Homepage</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
