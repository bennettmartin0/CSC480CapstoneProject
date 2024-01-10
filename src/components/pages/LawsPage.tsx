import { PageTemplate } from "./PageTemplate";

export const LawsPage = () => (
    <PageTemplate headerImageURI="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Figure_1_-_Map_of_Jekyll_Island.png/588px-Figure_1_-_Map_of_Jekyll_Island.png?20210414023925" header="Laws" showGauge={false}>
        <p>
            Certain laws and regulations have been passed which are intended to further 
            sea turtle conservation efforts. It is your responsibility to 
            know the law and follow it accordingly to ensure the protection 
            of these beautiful sea creatures for the enjoyment of 
            generations to come.
        </p>
        <br/>
    
        <h2 className="text-lg font-bold font-lotus-eden">Artificial Light</h2>
        <p>
            <a href="https://library.municode.com/ga/jekyll_island_authority/codes/code_of_ordinances?nodeId=COOR_CH10ENNARE_ARTVIBELI_S10-215STPEBELINOBE" className="underline">Article VI of the Georgia revised code</a> states 
             that Flashlights are prohibited on or near beaches from 
             May to October, unless using turtle-safe lighting. 
             Turtle-safe lighting (including lamps/tubes/bulbs/diodes or 
             other light sources that may be used in exterior light 
             fixtures) has been specially designed to emit only long 
             wavelength light (via red or amber LEDs) that is not 
             disruptive to nesting sea turtles or their hatchlings. 
             Turtle-safe lights can be purchased online or locally at the Georgia Sea 
             Turtle Center’s gift shop.
        </p>
        <br />
        <h2 className="text-lg font-bold font-lotus-eden">Keeping Sea Turtles as Pets</h2>
        <p>Sea turtles native to Georgia may not be held as a pet regardless of its origin or morphology. You can find more information about laws related to native wildlife on the <a href="https://gadnrle.org/laws-native-wildlife" className="underline">Georgia Department of Natural Resources</a>.</p>
        <br />
        <h2 className="text-lg font-bold font-lotus-eden">Guidance for Sea Turtle Encounters</h2>
        <ul className="list-disc">
            <li>
                <p>When walking the beach at night, don’t use flashlights and flash photography. They can deter turtles from coming ashore to nest or cause them to abort nesting.</p>
            </li>
            <li>
                <p>If you encounter a sea turtle on the beach, remain quiet, still and at a distance.</p>
            </li>
            <li>
                <p>Leave turtle tracks undisturbed. Researchers use them to identify the species and mark nests for protection.</p>
            </li>
            <li>
                <p>Properly dispose of your garbage. Turtles may mistake plastic bags, Styrofoam and trash floating in the water as food. After ingesting trash, it can kill them by clogging their intestines.</p>
            </li>
            <li>
                <p>When boating, stay alert and avoid turtles. Of the 84 sea turtles found dead or hurt in Georgia last year, 45 percent that could be assessed had suffered injuries consistent with being hit by a boat. Boaters who hit a sea turtle are urged to stand-by and immediately call DNR at 800-2-SAVE-ME (800-272-8363).</p>
            </li>
        </ul>

        <br />
        <hr />
        <br />

        
        <p className="text-center font-bold text-sm font-lotus-eden">Resources</p>
        <ul>
            <li>
                <p className="text-xs indent-8 leading-6">
                    Georgia DNR. (May 3, 2023). <i>Loggerhead Nesting Season Begins with Blackbeard</i>. Georgia DNR Wildlife Resources Division.
                    Retrieved from: <a href="https://georgiawildlife.com/loggerhead-nesting-season-begins-blackbeard">https://georgiawildlife.com/loggerhead-nesting-season-begins-blackbeard</a>
                </p>
            </li>
        </ul>
    </PageTemplate>
);