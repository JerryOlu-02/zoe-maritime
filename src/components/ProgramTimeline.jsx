import "./styles/ProgramTimeline.scss";

import { ReactComponent as SpeakerIcon } from "../assets/svg/speaker.svg";
import { ReactComponent as MeetingIcon } from "../assets/svg/meeting.svg";
import { ReactComponent as TeacherIcon } from "../assets/svg/teacher.svg";

export default function ProgramTimeline() {
  return (
    <section className="program-timeline">
      <h2>
        LIMWEEK 2025
        <br /> Program Timeline
      </h2>

      <aside className="program-timeline__container">
        <div className="program-timeline__item">
          <SpeakerIcon />

          <div className="program-timeline__content">
            <p>Opening Public Lecture</p>

            <p>
              By <strong>Dr. Segun Musa</strong>, Secretary General African
              Shipowners Association.
            </p>
          </div>
        </div>

        <div className="program-timeline__item">
          <MeetingIcon />

          <div className="program-timeline__content">
            <p>Maritime B2B Conference</p>

            <p>
              There are different rountables quoted in the brief which ought to
              have been listed to complete the sentence eg Maritime Security in
              the Gulf of Guinea, Maritime Transportation and Port Development,
              Marine Environment, Women in Maritime etc.
            </p>
          </div>
        </div>

        <div className="program-timeline__item">
          <TeacherIcon />

          <div className="program-timeline__content">
            <p>Maritime Youth Mentorship</p>

            <p>
              Equipping young minds with knowledge, mentorship, and connections
              for a thriving maritime future.
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
}
