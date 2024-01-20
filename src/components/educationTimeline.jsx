const EducationTimeline = () => {
  return (
    <div className="mt-20 ml-20">
      <div className="timeline">
        <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1  ">
          <div className="timeline__event__icon ">
            <i className="lni-cake"></i>
            <div className="timeline__event__date">
              May 2023 <br /> to <br />  Dec 2023
            </div>
          </div>
          <div className="timeline__event__content ">
            <div className="timeline__event__title">
              <div className="company"><h3>MICROVERSE, Remote</h3>
                <h5 className="capitalize text-slate-500">Full Stack Software Development Program</h5>
              </div>
              <div className="normal-case text-sm pl-4 leading-normal">
                <ul className="[&>li]:pt-2 list-disc ">
                  <li>Spent over 1300 hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux. </li>
                  <li>Developed skills in remote pair-programming using GitHub, industry-standard gitflow, and daily standups to communicate and collaborate with international remote developers. </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
          <div className="timeline__event__icon">
            <i className="lni-slim"></i>
            <div className="timeline__event__date">
              Feb 2020 <br /> to <br />  Jan 2024
            </div>
          </div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">
              <div className="company"><h3>REGENT UNIVERSITY OF SCI AND TECH</h3>
                <h5 className="capitalize text-slate-500">BBA. Bachelor of Business Administration, ( E-commerce )</h5>
              </div>
              <div className="normal-case text-sm pl-4 leading-normal">
                <ul className="[&>li]:pt-2 list-disc ">
                  <li>The Role of Social Media Marketing in Enhancing E-commerce Sales in Ghana (Thesis).</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationTimeline;