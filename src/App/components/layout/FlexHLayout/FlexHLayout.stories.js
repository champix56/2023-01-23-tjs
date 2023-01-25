/* eslint-disable */
import FlexHLayout from './FlexHLayout';

export default {
  title: "FlexHLayout",
};

export const Default = () => (
  <FlexHLayout style={{ padding: '8px', border: '1px solid black' }} >
    <div style={{ border: '1px solid black', backgroundColor: '#87CEEB3f', padding: '15px', textAlign: "center" }}>
      1er enfant etendu
    </div>
    <div style={{ border: '1px solid black', backgroundColor: '#FF63473f', padding: '15px', textAlign: "center" }}>
      2nd restreint
    </div>
  </FlexHLayout>);

Default.story = {
  name: 'default',
};
