const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];
  
const metric = 'redness';

const judgeVegetable = (vegetables, metric) => {

  let currentMax = vegetables[0][metric];
  let i = 0; 
  vegetables.forEach( (element, index) => {
    if(element[metric] >= currentMax){
      currentMax = element[metric];
      i = index;
    }
  });

  return vegetables[i].submitter;
};

console.log(judgeVegetable(vegetables, metric));