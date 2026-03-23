export interface DonationLevel {
  name: string;
  range: string;
  isSpecial?: boolean;
}

export const HEARO_LEVELS: DonationLevel[] = [
  { name: "Friend of EAR", range: "R$ 500 - R$ 1.955" }, // [cite: 32, 33]
  { name: "Gold", range: "R$ 1.956" }, // [cite: 34, 35]
  { name: "Sapphire", range: "R$ 3.500" }, // [cite: 36, 37]
  { name: "Platinum", range: "R$ 5.000" }, // [cite: 38, 39]
];

export const SPECIAL_RECOGNITION: DonationLevel[] = [
  { name: "Diamond", range: "R$ 10.000", isSpecial: true }, //
  { name: "Honors Circle", range: "R$ 10.001 - R$ 29.999", isSpecial: true }, //
  { name: "Ambassador's Circle", range: "Above R$ 30.000", isSpecial: true }, // [cite: 45, 46]
  { name: "Legacy Circle", range: "R$ 100.000", isSpecial: true }, // [cite: 47, 48]
];