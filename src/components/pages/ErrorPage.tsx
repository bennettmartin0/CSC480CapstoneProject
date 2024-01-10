import { PageTemplate } from "./PageTemplate";

export const ErrorPage = () => (
    <PageTemplate header="Error" showGauge={false}>
        <p>
            Hmm we couldn't find the content you're looking for!
        </p>
    </PageTemplate>
);