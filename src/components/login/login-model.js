import latestObj from 'rx-combine-latest-obj'

const model = ({actions}) => {
  return latestObj({actions}).startWith()
};

export default model;
