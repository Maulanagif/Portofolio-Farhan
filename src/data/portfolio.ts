export const siteConfig = {
  name: "Farhan Maulana",
  title: "Fresh Graduate · Information System",
  email: "fm50496@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/farhan-maulana-a966ba3ba?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  linkedinHandle: "farhan-maulana",
  whatsapp: "https://wa.me/6282287786941",
  whatsappNumber: "+62 822-8778-6941",
  instagram: "https://www.instagram.com/farh.anm01?igsh=MXNwNHBkZTcyODJ1bA==",
  instagramHandle: "@FARH.ANM01",
  github: "https://github.com/Maulanagif",
  githubHandle: "Maulanagif",
  location: "Jakarta Selatan, Indonesia",
  locationUrl:
    "https://www.google.com/maps/search/?api=1&query=Jakarta+Selatan,+Indonesia",
  profileImage: "/profile.png",
  logo: "/Logo_Fm.png",
  cv: "/CV FARHAN MAULANA.pdf",
  cvDownloadName: "CV-Farhan-Maulana.pdf",
  bio: "Fresh Graduate Sistem Informasi yang memiliki minat dalam bidang Teknologi Informasi, Quality Assurance (QA), Software Development, serta Administrasi. Memiliki kemampuan analitis, teliti, dan cepat beradaptasi dalam lingkungan kerja.",
  about: [
    "Saya merupakan Fresh Graduate Program Studi Sistem Informasi yang memiliki minat di bidang Software Development, Quality Assurance (QA), Teknologi Informasi, serta Administrasi. Selama menempuh pendidikan, saya mengembangkan kompetensi dalam analisis sistem, perancangan basis data, perancangan website, pengembangan aplikasi berbasis web, serta memahami dasar-dasar administrasi server dan jaringan komputer. Selain itu, saya terbiasa menggunakan aplikasi perkantoran seperti Microsoft Office untuk pengolahan data, penyusunan dokumen, dan pembuatan laporan. Saya memiliki kemampuan belajar yang cepat, teliti, mampu bekerja secara individu maupun dalam tim, serta siap berkontribusi dan terus mengembangkan kemampuan di lingkungan kerja yang profesional.",
  ],
};

export const navLinks = [
  { href: "#home", label: "Beranda" },
  { href: "#about", label: "Tentang" },
  { href: "#skills", label: "Keahlian" },
  { href: "#projects", label: "Proyek" },
  { href: "#experience", label: "Pengalaman" },
  { href: "#certifications", label: "Sertifikasi" },
  { href: "#contact", label: "Kontak" },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React Native",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    items: ["PHP (Native)", "Node.js"],
  },
  {
    title: "Database",
    items: ["MySQL", "Firebase"],
  },
  {
    title: "Tools",
    items: [
      "Visual Studio Code",
      "Cursor",
      "XAMPP",
      "Microsoft Office",
      "Wireshark",
      "VirtualBox",
      "Cisco Packet Tracer",
    ],
  },
  {
    title: "Design",
    items: ["Figma"],
  },
];

export type ProjectImage = {
  src: string;
  alt: string;
};

export type DemoAccount = {
  role: string;
  username: string;
  password: string;
};

export type ProjectDetail = {
  fullDescription: string;
  images: ProjectImage[];
  technologies: string[];
  features?: string[];
  demoAccounts?: DemoAccount[];
};

export type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  live?: string;
  liveLabel?: string;
  detail: ProjectDetail;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "SIPAS",
    subtitle: "Proyek Akhir · Sistem Informasi",
    description:
      "Sistem informasi berbasis web untuk digitalisasi proses pendaftaran pasien dan manajemen antrian di Puskesmas Sijunjung.",
    tags: ["PHP Native", "MySQL", "Cloudinary"],
    live: "https://puskesmassijunjung.freehosting.dev/",
    liveLabel: "Lihat Website",
    detail: {
      fullDescription:
        "Merancang dan mengembangkan sistem informasi antrian dan pendaftaran pasien berbasis web menggunakan PHP Native, MySQL, dan Cloudinary sebagai bagian dari penyelesaian skripsi.",
      images: [
        { src: "/Gambar1Sipas.png", alt: "Tampilan beranda SIPAS — Puskesmas Sijunjung" },
        { src: "/Gambar2Sipas.png", alt: "Tampilan kelola antrian admin SIPAS" },
      ],
      technologies: ["PHP Native", "MySQL", "Cloudinary"],
      features: [
        "Halaman beranda dan profil Puskesmas",
        "Informasi layanan dan program kesehatan",
        "Manajemen konten melalui panel admin",
        "Autentikasi pengguna dengan role admin dan user",
        "Desain responsif untuk perangkat mobile dan desktop",
      ],
      demoAccounts: [
        { role: "Admin", username: "adminSIPAS@gmail.com", password: "puskesmas sijunjung" },
        { role: "User", username: "demo123@gmail.com", password: "demo123" },
      ],
    },
  },
  {
    id: 2,
    title: "Desain Website Praktik Kerja Lapangan",
    subtitle: "Praktik Kerja Lapangan (PKL)",
    description:
      "Perancangan tampilan website selama magang, mencakup wireframe, mockup, dan desain UI yang disesuaikan dengan kebutuhan perusahaan tempat PKL.",
    tags: ["Figma", "UI/UX", "Wireframe", "Mockup"],
    live:
      "https://www.figma.com/proto/RGFsTIP5ukqC6X4LXdcEqd/Untitled?node-id=1149-7198&t=sNGAxwJP73IBpMCC-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A3&starting-point-node-id=1%3A2",
    liveLabel: "Lihat Mockup Figma",
    detail: {
      fullDescription:
        "Proyek desain UI/UX website Dinas Pertanian Provinsi Sumatera Barat (DISTANHORBUN) yang dikerjakan selama Praktik Kerja Lapangan (PKL). Desain mencakup mockup halaman beranda, struktur navigasi, dan prototype interaktif di Figma sebagai acuan pengembangan website resmi instansi.",
      images: [
        { src: "/figma 1.png", alt: "Mockup halaman beranda website DISTANHORBUN" },
        { src: "/figma 2.png", alt: "Prototype interaktif alur navigasi website di Figma" },
      ],
      technologies: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Design System"],
      features: [
        "Mockup halaman beranda dengan hero, berita, dan agenda",
        "Struktur navigasi dan layout informasi instansi",
        "Prototype interaktif alur antar halaman",
        "Desain responsif sebagai acuan pengembangan website",
      ],
    },
  },
];

export const experiences = [
  {
    role: "Mahasiswa Sistem Informasi",
    company: "Universitas Putra Indonesia Yptk Padang",
    period: "September 2022 - Mei 2026",
    description:
      "Lulus S1 Sistem Informasi dalam waktu 3,5 tahun dengan kompetensi di bidang analisis sistem, perancangan basis data, pengembangan aplikasi berbasis web, serta dasar administrasi server dan jaringan komputer. Berpengalaman mengerjakan berbagai proyek akademik yang berfokus pada pengembangan sistem informasi.",
  },
  {
    role: "Praktik Kerja Lapangan (PKL)",
    company: "Dinas Komunikasi, Statistik dan Informatika Provinsi Sumatera Barat",
    period: "Mei 2025 - Juni 2025",
    description: [
      "Merancang desain antarmuka (UI/UX) website menggunakan Figma sesuai kebutuhan instansi.",
      "Membuat wireframe dan prototype sebagai acuan pengembangan website.",
      "Menyusun dokumentasi kegiatan dan laporan harian (logbook) selama PKL.",
      "Melakukan presentasi progres pekerjaan secara berkala kepada pembimbing.",
      "Menerapkan komunikasi profesional dan manajemen waktu dalam lingkungan kerja pemerintahan.",
    ],
  },
];

export type CertificationImage = {
  src: string;
  alt: string;
};

export type CertificationDetail = {
  fullDescription: string;
  images: CertificationImage[];
  issuer?: string;
  issuedAt?: string;
  credentialUrl?: string;
  credentialLabel?: string;
};

export type Certification = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags?: string[];
  detail: CertificationDetail;
};

/** Tambahkan sertifikat di sini — letakkan foto di folder public/ */
export const certifications: Certification[] = [
  {
    id: 1,
    title: "Sertifikat Praktik Kerja Lapangan",
    subtitle: "Diskominfotik Provinsi Sumatera Barat",
    description:
      "Sertifikat penghargaan atas kontribusi selama program Kerja Praktik di Dinas Komunikasi, Informatika dan Statistik Provinsi Sumatera Barat.",
    tags: ["PKL", "UI/UX", "Figma"],
    detail: {
      fullDescription:
        "Diberikan kepada Farhan Maulana (NIM 22101152610178) sebagai mahasiswa Program Studi Sistem Informasi Universitas Putra Indonesia YPTK Padang, atas kontribusi selama program Kerja Praktik di Dinas Komunikasi, Informatika dan Statistik Provinsi Sumatera Barat periode 2 Mei 2025 – 2 Juni 2025. Sertifikat ini meliputi halaman sertifikat dan lembar penilaian dengan nilai A pada seluruh aspek penilaian.",
      issuer: "Dinas Komunikasi, Informatika dan Statistik Provinsi Sumatera Barat",
      issuedAt: "2 Juni 2025",
      images: [
        {
          src: "/s1.jpeg",
          alt: "Sertifikat Praktik Kerja Lapangan — halaman sertifikat",
        },
        {
          src: "/s2.jpeg",
          alt: "Sertifikat Praktik Kerja Lapangan — lembar penilaian",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Huawei ICT Academy",
    subtitle: "Huawei ICT Academy",
    description:
      "Sertifikat penyelesaian kursus dari Huawei ICT Academy meliputi HCIP-Datacom Core Technology, Algorithm and Program Design, dan Python Programming Basics.",
    tags: ["Networking", "Python", "Programming", "Huawei"],
    detail: {
      fullDescription:
        "Menyelesaikan tiga kursus di Huawei ICT Academy dan lulus ujian penilaian masing-masing kursus. Program meliputi HCIP-Datacom Core Technology V1.0 (jaringan dan teknologi datacom), Algorithm and Program Design (algoritma dan desain program), serta Python Programming Basics (dasar pemrograman Python). Sertifikat ini memverifikasi penyelesaian kursus dan bukan sertifikasi profesional Huawei.",
      issuer: "Huawei ICT Academy",
      issuedAt: "9–13 November 2025",
      images: [
        {
          src: "/HCIP-Datacom Core Techno.png",
          alt: "Huawei ICT Academy — HCIP-Datacom Core Technology V1.0 Course",
        },
        {
          src: "/Algorithm and Program.png",
          alt: "Huawei ICT Academy — Algorithm and Program Design",
        },
        {
          src: "/Python Programming Basics.png",
          alt: "Huawei ICT Academy — Python Programming Basics",
        },
      ],
    },
  },
];
