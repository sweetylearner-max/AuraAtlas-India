/**
 * Complete hardcoded college catalog for all 11 supported cities.
 * Used as a client-side fallback when the colleges table isn't available,
 * and as the source of truth for the CollegePicker component.
 */

export interface CollegeEntry {
  name: string;
  city: string;
  latitude: number;
  longitude: number;
  campus_radius: number;
  domain: string;
}

/** Returns a logo URL for a college using Google's favicon service */
export function getCollegeLogoUrl(domain: string, size: number = 64): string {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
}

/** Find a college entry by name */
export function findCollegeByName(name: string): CollegeEntry | undefined {
  return ALL_COLLEGES.find((c) => c.name === name);
}

export const ALL_COLLEGES: CollegeEntry[] = [
  // ── Mumbai ─────────────────────────────────────────────────────
  { name: "Indian Institute of Technology Bombay", city: "Mumbai", latitude: 19.1334, longitude: 72.9133, campus_radius: 2.5, domain: "iitb.ac.in" },
  { name: "University of Mumbai", city: "Mumbai", latitude: 18.9322, longitude: 72.8264, campus_radius: 2.0, domain: "mu.ac.in" },
  { name: "TATA Institute of Social Sciences", city: "Mumbai", latitude: 19.0226, longitude: 72.8494, campus_radius: 1.2, domain: "tiss.edu" },
  { name: "NMIMS University", city: "Mumbai", latitude: 19.1075, longitude: 72.8263, campus_radius: 1.0, domain: "nmims.edu" },
  { name: "Somaiya Vidyavihar University", city: "Mumbai", latitude: 19.0729, longitude: 72.8997, campus_radius: 1.3, domain: "somaiya.edu" },
  { name: "SP Jain Institute of Management", city: "Mumbai", latitude: 19.0552, longitude: 72.8346, campus_radius: 1.0, domain: "spjain.org" },

  // ── Delhi ──────────────────────────────────────────────────────
  { name: "Indian Institute of Technology Delhi", city: "Delhi", latitude: 28.5449, longitude: 77.1926, campus_radius: 2.0, domain: "iitd.ac.in" },
  { name: "Delhi University", city: "Delhi", latitude: 28.6877, longitude: 77.2136, campus_radius: 2.5, domain: "du.ac.in" },
  { name: "Jawaharlal Nehru University", city: "Delhi", latitude: 28.5409, longitude: 77.1671, campus_radius: 1.8, domain: "jnu.ac.in" },
  { name: "Jamia Millia Islamia", city: "Delhi", latitude: 28.5609, longitude: 77.2809, campus_radius: 1.5, domain: "jmi.ac.in" },
  { name: "Ambedkar University Delhi", city: "Delhi", latitude: 28.6362, longitude: 77.2253, campus_radius: 1.0, domain: "aud.ac.in" },
  { name: "AIIMS Delhi", city: "Delhi", latitude: 28.5672, longitude: 77.2100, campus_radius: 1.2, domain: "aiims.edu" },

  // ── Bangalore ──────────────────────────────────────────────────
  { name: "Indian Institute of Science", city: "Bangalore", latitude: 13.0213, longitude: 77.5694, campus_radius: 2.0, domain: "iisc.ac.in" },
  { name: "Indian Institute of Management Bangalore", city: "Bangalore", latitude: 12.9307, longitude: 77.6362, campus_radius: 1.5, domain: "iimb.ac.in" },
  { name: "Bangalore University", city: "Bangalore", latitude: 12.9592, longitude: 77.5784, campus_radius: 2.0, domain: "bangaloreuniversity.ac.in" },
  { name: "Christ University", city: "Bangalore", latitude: 12.9358, longitude: 77.6094, campus_radius: 1.2, domain: "christuniversity.in" },
  { name: "RV College of Engineering", city: "Bangalore", latitude: 12.9233, longitude: 77.4988, campus_radius: 1.0, domain: "rvce.edu.in" },
  { name: "PES University", city: "Bangalore", latitude: 12.9347, longitude: 77.5351, campus_radius: 1.0, domain: "pes.edu" },

  // ── Hyderabad ──────────────────────────────────────────────────
  { name: "University of Hyderabad", city: "Hyderabad", latitude: 17.4061, longitude: 78.3578, campus_radius: 2.0, domain: "uohyd.ac.in" },
  { name: "Indian Institute of Technology Hyderabad", city: "Hyderabad", latitude: 17.5936, longitude: 78.1220, campus_radius: 1.8, domain: "iith.ac.in" },
  { name: "BITS Pilani Hyderabad Campus", city: "Hyderabad", latitude: 17.5449, longitude: 78.5718, campus_radius: 1.5, domain: "bits-pilani.ac.in" },
  { name: "Osmania University", city: "Hyderabad", latitude: 17.4126, longitude: 78.5188, campus_radius: 2.2, domain: "osmania.ac.in" },
  { name: "NALSAR University of Law", city: "Hyderabad", latitude: 17.4243, longitude: 78.3565, campus_radius: 1.0, domain: "nalsar.ac.in" },

  // ── Chennai ────────────────────────────────────────────────────
  { name: "Indian Institute of Technology Madras", city: "Chennai", latitude: 12.9916, longitude: 80.2336, campus_radius: 2.5, domain: "iitm.ac.in" },
  { name: "University of Madras", city: "Chennai", latitude: 13.0569, longitude: 80.2782, campus_radius: 2.0, domain: "unom.ac.in" },
  { name: "Anna University", city: "Chennai", latitude: 13.0104, longitude: 80.2339, campus_radius: 1.8, domain: "annauniv.edu" },
  { name: "Vellore Institute of Technology Chennai", city: "Chennai", latitude: 12.8406, longitude: 80.1534, campus_radius: 1.5, domain: "vit.ac.in" },
  { name: "Loyola College Chennai", city: "Chennai", latitude: 13.0731, longitude: 80.2489, campus_radius: 1.0, domain: "loyolacollege.edu" },

  // ── Kolkata ────────────────────────────────────────────────────
  { name: "Jadavpur University", city: "Kolkata", latitude: 22.4975, longitude: 88.3718, campus_radius: 1.8, domain: "jaduniv.edu.in" },
  { name: "University of Calcutta", city: "Kolkata", latitude: 22.5726, longitude: 88.3639, campus_radius: 2.0, domain: "caluniv.ac.in" },
  { name: "Indian Institute of Management Calcutta", city: "Kolkata", latitude: 22.5667, longitude: 88.4392, campus_radius: 1.5, domain: "iimcal.ac.in" },
  { name: "Presidency University", city: "Kolkata", latitude: 22.5794, longitude: 88.3527, campus_radius: 1.0, domain: "presiuniv.ac.in" },
  { name: "St. Xavier's College Kolkata", city: "Kolkata", latitude: 22.5748, longitude: 88.3521, campus_radius: 1.0, domain: "sxccal.edu" },

  // ── Pune ───────────────────────────────────────────────────────
  { name: "Savitribai Phule Pune University", city: "Pune", latitude: 18.5579, longitude: 73.8046, campus_radius: 2.2, domain: "unipune.ac.in" },
  { name: "College of Engineering Pune", city: "Pune", latitude: 18.5196, longitude: 73.8553, campus_radius: 1.3, domain: "coep.org.in" },
  { name: "Symbiosis International University", city: "Pune", latitude: 18.5213, longitude: 73.8149, campus_radius: 1.5, domain: "siu.edu.in" },
  { name: "MIT World Peace University", city: "Pune", latitude: 18.5561, longitude: 73.7818, campus_radius: 1.2, domain: "mitwpu.edu.in" },
  { name: "Pune Institute of Computer Technology", city: "Pune", latitude: 18.4579, longitude: 73.8551, campus_radius: 1.0, domain: "pict.edu" },

  // ── Ahmedabad ──────────────────────────────────────────────────
  { name: "Indian Institute of Management Ahmedabad", city: "Ahmedabad", latitude: 23.0300, longitude: 72.5450, campus_radius: 1.5, domain: "iima.ac.in" },
  { name: "Gujarat University", city: "Ahmedabad", latitude: 23.0372, longitude: 72.5575, campus_radius: 2.0, domain: "gujaratuniversity.ac.in" },
  { name: "CEPT University", city: "Ahmedabad", latitude: 23.0368, longitude: 72.5567, campus_radius: 1.0, domain: "cept.ac.in" },
  { name: "Nirma University", city: "Ahmedabad", latitude: 23.1109, longitude: 72.5151, campus_radius: 1.3, domain: "nirmauni.ac.in" },

  // ── Jaipur ─────────────────────────────────────────────────────
  { name: "University of Rajasthan", city: "Jaipur", latitude: 26.9258, longitude: 75.8069, campus_radius: 2.0, domain: "uniraj.ac.in" },
  { name: "Malaviya National Institute of Technology", city: "Jaipur", latitude: 26.8659, longitude: 75.8076, campus_radius: 1.5, domain: "mnit.ac.in" },
  { name: "BITS Pilani", city: "Jaipur", latitude: 28.3637, longitude: 73.3162, campus_radius: 1.8, domain: "bits-pilani.ac.in" },

  // ── Lucknow ────────────────────────────────────────────────────
  { name: "University of Lucknow", city: "Lucknow", latitude: 26.8651, longitude: 80.9200, campus_radius: 2.0, domain: "lkouniv.ac.in" },
  { name: "Indian Institute of Management Lucknow", city: "Lucknow", latitude: 26.8476, longitude: 80.9473, campus_radius: 1.5, domain: "iiml.ac.in" },
  { name: "SGPGI Lucknow", city: "Lucknow", latitude: 26.8402, longitude: 80.9694, campus_radius: 1.2, domain: "sgpgi.ac.in" },

  // ── Chandigarh ─────────────────────────────────────────────────
  { name: "Panjab University", city: "Chandigarh", latitude: 30.7602, longitude: 76.7652, campus_radius: 2.0, domain: "puchd.ac.in" },
  { name: "PGIMER Chandigarh", city: "Chandigarh", latitude: 30.7655, longitude: 76.7857, campus_radius: 1.2, domain: "pgimer.edu.in" },
  { name: "Chandigarh University", city: "Chandigarh", latitude: 30.7741, longitude: 76.5776, campus_radius: 1.5, domain: "cuchd.in" },

  // ── Bhopal ─────────────────────────────────────────────────────
  { name: "Indian Institute of Science Education and Research Bhopal", city: "Bhopal", latitude: 23.2815, longitude: 77.3427, campus_radius: 1.5, domain: "iiserb.ac.in" },
  { name: "Barkatullah University", city: "Bhopal", latitude: 23.2217, longitude: 77.4082, campus_radius: 2.0, domain: "bubhopal.ac.in" },
  { name: "Maulana Azad National Institute of Technology", city: "Bhopal", latitude: 23.2133, longitude: 77.4006, campus_radius: 1.3, domain: "manit.ac.in" },

  // ── Kochi ──────────────────────────────────────────────────────
  { name: "Cochin University of Science and Technology", city: "Kochi", latitude: 9.9313, longitude: 76.2666, campus_radius: 1.5, domain: "cusat.ac.in" },
  { name: "Kerala University of Fisheries and Ocean Studies", city: "Kochi", latitude: 9.9748, longitude: 76.2979, campus_radius: 1.2, domain: "kufos.ac.in" },
  { name: "Rajagiri College of Social Sciences", city: "Kochi", latitude: 10.0583, longitude: 76.3295, campus_radius: 1.0, domain: "rajagiri.edu" },

  // ── Visakhapatnam ──────────────────────────────────────────────
  { name: "Andhra University", city: "Visakhapatnam", latitude: 17.7221, longitude: 83.3052, campus_radius: 2.0, domain: "andhrauniversity.edu.in" },
  { name: "GITAM University", city: "Visakhapatnam", latitude: 17.7315, longitude: 83.3135, campus_radius: 1.5, domain: "gitam.edu" },
  { name: "Jawaharlal Nehru Technological University Kakinada", city: "Visakhapatnam", latitude: 17.6868, longitude: 83.2185, campus_radius: 1.3, domain: "jntuk.edu.in" },

  // ── Karachi (Pakistan) ─────────────────────────────────────────
  { name: "University of Karachi", city: "Karachi", latitude: 24.9436, longitude: 67.1148, campus_radius: 2.2, domain: "uok.edu.pk" },
  { name: "NED University of Engineering", city: "Karachi", latitude: 24.9208, longitude: 67.1130, campus_radius: 1.5, domain: "neduet.edu.pk" },
  { name: "Aga Khan University", city: "Karachi", latitude: 24.8607, longitude: 67.0739, campus_radius: 1.2, domain: "aku.edu" },

  // ── Lahore (Pakistan) ──────────────────────────────────────────
  { name: "University of the Punjab", city: "Lahore", latitude: 31.5204, longitude: 74.3587, campus_radius: 2.2, domain: "pu.edu.pk" },
  { name: "Lahore University of Management Sciences", city: "Lahore", latitude: 31.4730, longitude: 74.4012, campus_radius: 1.5, domain: "lums.edu.pk" },
  { name: "University of Engineering and Technology Lahore", city: "Lahore", latitude: 31.5189, longitude: 74.3547, campus_radius: 1.8, domain: "uet.edu.pk" },

  // ── Dhaka (Bangladesh) ─────────────────────────────────────────
  { name: "University of Dhaka", city: "Dhaka", latitude: 23.7277, longitude: 90.3991, campus_radius: 2.0, domain: "du.ac.bd" },
  { name: "Bangladesh University of Engineering and Technology", city: "Dhaka", latitude: 23.7267, longitude: 90.3928, campus_radius: 1.5, domain: "buet.ac.bd" },
  { name: "North South University", city: "Dhaka", latitude: 23.8148, longitude: 90.4244, campus_radius: 1.2, domain: "northsouth.edu" },

  // ── Colombo (Sri Lanka) ────────────────────────────────────────
  { name: "University of Colombo", city: "Colombo", latitude: 6.9010, longitude: 79.8604, campus_radius: 1.5, domain: "cmb.ac.lk" },
  { name: "University of Moratuwa", city: "Colombo", latitude: 6.7961, longitude: 79.9009, campus_radius: 1.5, domain: "mrt.ac.lk" },

  // ── Kathmandu (Nepal) ──────────────────────────────────────────
  { name: "Tribhuvan University", city: "Kathmandu", latitude: 27.6820, longitude: 85.3183, campus_radius: 2.0, domain: "tu.edu.np" },
  { name: "Kathmandu University", city: "Kathmandu", latitude: 27.6208, longitude: 85.5379, campus_radius: 1.5, domain: "ku.edu.np" },
];

/** Get all colleges for a specific city */
export function getCollegesByCity(city: string): CollegeEntry[] {
  return ALL_COLLEGES.filter((c) => c.city === city);
}

/** Get all unique city names that have colleges */
export function getCitiesWithColleges(): string[] {
  return [...new Set(ALL_COLLEGES.map((c) => c.city))];
}
