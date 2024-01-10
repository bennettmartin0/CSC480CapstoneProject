import { PageTemplate } from "./PageTemplate";

export const HomePage = () => (
    <PageTemplate headerImageURI="./src/assets/Home3.jpg" header="Home">
        <p className="text-sm ">
            Nearly all species of sea turtle are now classified as endangered, with three of the seven existing species being critically endangered. This app was designed with the purpose of addressing the critical need for public education surrounding the conservation of sea turtles in the Jekyll Island, Georgia region. All information contained within this website was obtained by authorative sources including the Georgia Department of Natural Resources, and the Georgia Sea Turtle Center. </p>
            <br></br>
            <p className="text-sm ">All references have been listed at the bottom of the page it was used, or listed in the attributes page (link is in the footer).</p>
        <br/>

        <h2 className="text-xl font-bold font-lotus-eden">Sea Turtle Facts</h2>
        <p className="text-sm">
        There are seven species of sea turtle, all of which are considered threatened or endangered. Two are critically endangered (Hawksbill and Kemp’s Ridley), one is endangered (Green) and and three are threatened (Leatherback, Olive Ridley, and Loggerhead). Flatbacks are listed as data deficient on the IUCN Red List but are listed as endangered in Australia. You can learn more information about sea turtles <a href="facts" className="underline">here</a>.</p>
        <br/>

        <h2 className="text-xl font-bold font-lotus-eden">Did You Know?</h2>
        <p className="text-sm">
            It is illegal to use certain types of flashlights on the beach at night! Learn more about this law and other regulations on the <a href="laws" className="underline">Laws</a> page.
        </p>
        <br/>

        <h2 className="text-xl font-bold font-lotus-eden">Found a Sick or Injured Sea Turtle?</h2>
        <p className="text-sm">
            You can report a sick or injured sea turtle to the Georgia Sea Turtle center on the <a href="report" className="underline">Report</a> page.
        </p>
        <br/>

        <h2 className="text-xl font-bold font-lotus-eden">Have More Questions?</h2>
        <p className="text-sm">
            Get answers on our <a href="faq" className="underline">FAQ</a> page.
        </p>
    </PageTemplate>
);