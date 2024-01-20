const TimelineComponents = () => {
      
    return ( 
        <div className="mt-20 ml-20">
    <div className="timeline">
  <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
    <div className="timeline__event__icon ">
      <i className="lni-cake"></i>
      <div className="timeline__event__date">
         April 2023 <br/> to <br/>  Oct 2023
      </div>
    </div>
    <div className="timeline__event__content ">
      <div className="timeline__event__title">
        <div className="company"><h3>MICROVERSE, Remote</h3>
        <h5 className="capitalize text-slate-500">Mentor (Volunteer)</h5>
        </div>
        <div className="normal-case text-sm pl-4 leading-normal">
          <ul className="[&>li]:pt-2 list-disc ">
            <li>Mentored 100+ junior developers, using zoom and slack, providing technical support through code reviews. </li>
            <li>Proposed improvements to code organization to improve code quality and overall performance.</li>
            <li>Provided advice and tips to 100+ developers on how to maintain motivation to maintain longevity in the program.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
    <div className="timeline__event__icon">
      <i className="lni-slim"></i>
      <div className="timeline__event__date">
      April 2023 <br/> to <br/>  Oct 2023
      </div>
    </div>
    <div className="timeline__event__content">
      <div className="timeline__event__title">
        <div className="company"><h3>FRANKO TRADING LIMITED, Accra</h3>
          <h5 className="capitalize text-slate-500">Software Developer</h5>
        </div>
        <div className="normal-case text-sm pl-4 leading-normal">
          <ul className="[&>li]:pt-2 list-disc ">
            <li>Developed an E-commerce Website using WordPress with 5K plus daily users. </li>
            <li>Developed a Mobile app with more than 500K plus download</li>
          </ul>
        </div>
      </div>
     
    </div>
  </div>

  <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
    <div className="timeline__event__icon">
      <i className="lni-burger"></i>
      <div className="timeline__event__date">
      April 2023 <br/> to <br/>  Oct 2023
      </div>
    </div>
    <div className="timeline__event__content">
      <div className="timeline__event__title">
        Lunch
      </div>
      <div className="timeline__event__description">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
      </div>
    </div>
  </div>
  
 

</div>
        </div>
  );
}
 
export default TimelineComponents;