export interface DonationLevel {
  name: string;
  range: string;
  isSpecial?: boolean;
  note?: string;
}

export const HEARO_LEVELS: DonationLevel[] = [
  { 
    name: "Friends of EAR", 
    range: "Up to R$ 1,955.99",
    note: "Donations in the Friends of EAR category are not listed on the physical donor wall. Every contribution is vital to the legacy we are building together."
  },
];

export const CLUB_1956: DonationLevel[] = [
  { name: "Gold", range: "R$ 1,956.00 – R$ 3,499.99" },
  { name: "Sapphire", range: "R$ 3,500.00 – R$ 4,999.99" },
  { name: "Platinum", range: "R$ 5,000.00 – R$ 7,499.99" },
  { name: "Diamond", range: "R$ 7,500.00 – R$ 9,999.99" },
];

export const SPECIAL_RECOGNITION: DonationLevel[] = [
  { name: "Honors", range: "R$ 10,000 – R$ 29,999", isSpecial: true },
  { name: "Ambassador's Circle", range: "R$ 30,000.00+", isSpecial: true },
  { name: "Legacy Circle", range: "R$ 100,000.00+", isSpecial: true },
];