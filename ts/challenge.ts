class myMap<T> {
  private map: {[key: string]: T} = {};
  
  public setItem(key: string, item: T) {
    this.map[key] = item;
  };
  
  public getItem(key: string) {
    return this.map[key];
  };

  public printMap() {
    for (const key in this.map) {
      console.log(key, this.map[key]);
    }
  };
};

console.log('Number Map');
const numberMap = new myMap<number>();
numberMap.setItem('apples', 10);
numberMap.setItem('bananas', 2);
console.log( numberMap.getItem('apples') );
numberMap.printMap();

console.log('-------------------');

console.log('String Map');
const stringMap = new myMap<string>();
stringMap.setItem('apples', '10');
stringMap.setItem('bananas', '2');
console.log( stringMap.getItem('apples') );
stringMap.printMap();
