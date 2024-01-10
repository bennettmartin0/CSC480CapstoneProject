import { PageTemplate } from "./PageTemplate";

export const ReportPage = () => (
    <PageTemplate headerImageURI="./src/assets/GeorgiaSeaTurtleCenter4.jpg" header="Report" showGauge={false}>
        <h2 className="text-lg font-bold font-lotus-eden">How to Report a Sick or Injured Sea Turtle</h2>
        <p></p>
        <p className="text-sm">
        If you have found a sick or injured sea turtle anywhere in the state of Georgia, please contact the Georgia Department of Natural Resources at 1-800-2SAVEME (1-800-272-8363). 
        </p>
        <br/>
        <p  className="text-sm">For more information, please visit the <a href="https://www.jekyllisland.com/activities/georgia-sea-turtle-center/#contact" className="underline">Georgia Sea Turtle Center's Website</a>.</p>
    </PageTemplate>
);