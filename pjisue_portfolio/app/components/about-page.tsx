export function AboutPage() {
  return (
    <main className="flex flex-row">
      <div className="flex flex-col justify-center align-center gap-10 mx-auto lg:my-30 lg:px-[15%] px-[10%]">
        <header>
          <h1 className="font-bold text-5xl mb-4">Jisue Park</h1>
          <div className="flex justify-between italic">
            <p>Creative Designer</p>
            <p>pjisue@gmail.com</p>
          </div>
        </header>
        <div className="flex flex-col justify-center align-center gap-10">
          <div className="flex flex-row gap-38">
            <div className="font-bold lg:min-w-18 lg:max-w-18 whitespace-nowrap">
              About me
            </div>
            <p>
              Designer working at the intersection of UX, industrial design, and
              systems thinking — with a interest in accessibility and meaningful
              interfaces. I lead hybrid teams and craft experiences that bridge
              physical products and digital experiences.
            </p>
          </div>
          <div className="flex flex-row gap-38">
            <div className="font-bold lg:min-w-18 lg:max-w-18">Experience</div>
            <div>
              <div className="mb-6">
                <p className="italic">BrandsWalk</p>
                <p>
                  <span className="italic">Creative Design Manager</span> | 2023-2025
                </p>
                <ul className="list-disc">
                  <li>
                    Directed cross-functional execution across product, web, and
                    branding for sub-brands, boosting online conversion by 40%
                    through site UX and visual overhauls.
                  </li>
                  <li>
                    Built scalable design systems and redefined brand tone,
                    unifying marketing and product experience across platforms.
                  </li>
                  <li>
                    Owned product launches end-to-end - from 3D renders to
                    Shopify integration.
                  </li>
                  <li>
                    Lead and create AI-automated workflows for marketing and
                    content; implemented solutions to reduce workload and
                    streamline daily tasks.
                  </li>
                </ul>
              </div>
              <div>
                <p className="italic">BrandsWalk</p>
                <p>
                  <span className="italic">Creative Design Specialist</span> | 2017.08-2023.04
                </p>
                <ul className="list-disc">
                  <li>
                    Created campaign assets across digital and in-store
                    platforms for three consumer brands, driving seasonal
                    engagement and visual cohesion.
                  </li>
                  <li>
                    Developed visuals for e-commerce website and look books
                  </li>
                  <li>
                    Contributed to a brand elevation initiative that attracted
                    partnerships with premium, design-centric brands by
                    improving site UX, product styling, and visual
                    communication.
                  </li>
                  <li>
                    Led in-store seasonal brand installations and visual
                    merchandising for 3 years, aligning physical experience with
                    brand narrative.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-38">
            <div className="font-bold lg:min-w-18 lg:max-w-18">Education</div>
            <div>
              <p className="italic">Pratt Institute</p>
              <p>
                <span className="italic">Bachelor of Industrial Design</span> | 2013-2017
              </p>
              <ul className="list-disc">
                <li>
                  <p>NASA Mars X-HAB5</p>
                  <p>
                    5 students in Industrial Design and Architecture designed a
                    Mars Surface Habitat for the first manned mission to Mars
                    with NASA. I contributed the most in the building crew
                    system, Mars EV design, modeling, rendering, and
                    presentation at NASA.
                  </p>
                </li>
                <li>
                  <p>Wearable Technology in ISS</p>
                  <p>
                    Solving hearing discomforts addressed by astronauts in ISS
                    with a partner. Contributed in UX research, design, making
                    prototypes. The prototype was delivered to the researchers
                    at NASA.
                  </p>
                </li>
                <li>
                  <p>Prosthetic Design</p>
                  <p>TODO: project description</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center align-center gap-10">
            <div className="flex flex-row gap-38">
              <div className="font-bold lg:min-w-18 lg:max-w-18">Skills</div>
              <p>InDesign</p>
            </div>
          </div>
          <div className="flex flex-col justify-center align-center">
            <div className="flex flex-row gap-38">
              <div className="font-bold lg:min-w-18 lg:max-w-18">Language</div>
              <p>English (Fluent)</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
