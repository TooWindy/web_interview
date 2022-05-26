import React from "react";
import ReactDOM from "react-dom";
import cntl from "cntl";
import Button from "./stories/Components/Button/Button";
import CollapsibleSection from "./stories/Components/CollapsibleSection/CollapsibleSection";
import Input from "./stories/Components/Input/Input";
import Dropdown from "./stories/Components/Dropdown/Dropdown";
import ProgressTracker from "./stories/Components/ProgressTracker/ProgressTracker";
import NavBar from "./stories/Components/NavBar/NavBar";

const containerCN = cntl`
  mt-3
  p-3
  rounded
`;

const App = () => {
  return (
    <div className="bg-black h-full w-full overflow-auto">
      <div>
        {/* <p>Create a screen here!</p>
        <p>
          Below are the provided Components that will be needed. You won&apos;t
          be expected to modify these Components at all, but you may need to
          study them and pass props.
        </p> */}
        <div>
          {/* <p>Nav bar</p> */}
          <NavBar />
        </div>
        <div className={containerCN}>
          <p>Progress Tracker</p>
          <ProgressTracker
            steps={Array(5)
              .fill()
              .map((a, index) => `Step ${index + 1}`)}
          />
        </div>
        <div className={containerCN}>
          <CollapsibleSection title="Overview">
            <Dropdown
              label="Company Name"
              options={Array(5)
                .fill()
                .map((a, index) => ({
                  label: `Option ${index + 1}`,
                  value: `Option ${index + 1}`,
                }))}
            />
            <Input label="eSpace Name" placeholder="placeholder" />
            <Dropdown
              label="Subscription"
              options={Array(5)
                .fill()
                .map((a, index) => ({
                  label: `Option ${index + 1}`,
                  value: `Option ${index + 1}`,
                }))}
            />
          </CollapsibleSection>
        </div>
        <div className={containerCN}>
          <CollapsibleSection title="Owner Information">
            <Input label="Primary Owner" placeholder="placeholder" />
            <Input label="Primary Owner Email" placeholder="placeholder" />
            <Input label="Primary Owner Phone" placeholder="placeholder" />
          </CollapsibleSection>
        </div>
        <div className={containerCN}>
          <CollapsibleSection title="Location Information">
            <Input label="Street Adresss" placeholder="placeholder" />
            <Input label="Suite/Unit" placeholder="placeholder" />
            <Input label="Postal Code" placeholder="placeholder" />
            <Input label="City" placeholder="placeholder" />
            <Dropdown
              label="City"
              options={Array(5)
                .fill()
                .map((a, index) => ({
                  label: `Option ${index + 1}`,
                  value: `Option ${index + 1}`,
                }))}
            />
          </CollapsibleSection>
        </div>
        <div className={containerCN}>
          <p>Button</p>
          <Button title="Button" />
        </div>
        <div className={containerCN}>
          <p>Input</p>
          <Input label="Label" placeholder="placeholder" />
        </div>
        <div className={containerCN}>
          <p>Dropdown</p>
          <Dropdown
            options={Array(5)
              .fill()
              .map((a, index) => ({
                label: `Option ${index + 1}`,
                value: `Option ${index + 1}`,
              }))}
          />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
