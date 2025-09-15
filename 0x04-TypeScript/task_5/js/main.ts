export interface MajorCredits {
  credits: number;
  readonly brand: 'MajorCredits';
}

["sumMinorCredits"]
 ["sumMinorCredits"]
export interface MinorCredits {
  credits: number;
  readonly brand: 'MinorCredits';
}
// Define interfaces
export interface MajorCredits {
  credits: number;
  readonly brand: 'MajorCredits';
}

export interface MinorCredits {
  credits: number;
  readonly brand: 'MinorCredits';
}

// Function to sum MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MajorCredits',
  };
}

// Function to sum MinorCredits
export functio

