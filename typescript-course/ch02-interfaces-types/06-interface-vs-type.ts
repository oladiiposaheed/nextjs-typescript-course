// 06-interface-vs-type.ts
// Differences between interface and type

// Interface - for object shapes
interface AnimalShape {
  name: string;
  sound: string;
}

// Interface can extend
interface DogShape extends AnimalShape {
  breed: string;
}

// Type alias - for object shapes
type CarShape = {
  make: string;
  model: string;
};

// Type alias can do unions (interface cannot)
type UserStatus = 'active' | 'inactive' | 'banned';

// Type alias for simple types
type LuckyNumber = number;

const petDog: DogShape = {
  name: 'Rex',
  sound: 'Woof',
  breed: 'German Shepherd'
};

const familyCar: CarShape = {
  make: 'Toyota',
  model: 'Camry'
};

const accountStatus: UserStatus = 'active';
const favoriteNumber: LuckyNumber = 7;

console.log(petDog.name + ' is a ' + petDog.breed);
console.log('Car: ' + familyCar.make + ' ' + familyCar.model);
console.log('Status: ' + accountStatus);
console.log('Lucky number: ' + favoriteNumber);