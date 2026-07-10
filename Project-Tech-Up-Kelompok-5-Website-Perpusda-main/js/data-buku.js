const books = [
  {
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    category: "Novel",
    status: "Dipinjam",
    cover: "images/katalog/laskar-pelangi.jpg",
  },

  {
    title: "Negeri 5 Menara",
    author: "Ahmad Fuadi",
    category: "Novel",
    status: "Tersedia",
    cover: "images/katalog/negeri-5-menara.jpg",
  },

  {
    title: "Bumi Manusia",
    author: "Pramoedya Ananta Toer",
    category: "Sastra Indonesia",
    status: "Dipinjam",
    cover: "images/katalog/bumi-manusia.jpg",
  },

  {
    title: "Ronggeng Dukuh Paruk",
    author: "Ahmad Tohari",
    category: "Sastra Indonesia",
    status: "Tersedia",
    cover: "images/katalog/ronggeng dukuh paruk.jpeg",
  },

  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    category: "Self Improvement",
    status: "Tersedia",
    cover: "images/katalog/rich dad poor dad.jpg",
  },

  {
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Improvement",
    status: "Tersedia",
    cover: "images/katalog/atomic-habits.jpg",
  },

  {
    title: "Filosofi Teras",
    author: "Henry Manampiring",
    category: "Self Improvement",
    status: "Tersedia",
    cover: "images/katalog/filosofi-teras.jpg",
  },

  {
    title: "Sebuah Seni untuk Bersikap Bodo Amat",
    author: "Mark Manson",
    category: "Self Improvement",
    status: "Tersedia",
    cover: "images/katalog/seni-bersikap-bodo-amat.png",
  },

  {
    title: "Landasan Pendidikan",
    author: "Iis Murasiah | Dyah Lyesmaya",
    category: "Pendidikan",
    status: "Tersedia",
    cover: "images/katalog/landasan-pendidikan.jpg",
  },

  {
    title: "Profesi Pendidikan",
    author: "Sumardjono Padmomartono | Umbu Tagela Ibi Leba",
    category: "Pendidikan",
    status: "Tersedia",
    cover: "images/katalog/profesi-pendidikan.jpg",
  },

  {
    title: "Matematika Diskret Teknik",
    author: "Seng Hansun, S.Si., M.Cs.",
    category: "Matematika",
    status: "Tersedia",
    cover: "images/katalog/matematika-dikret-teknik.jpg",
  },

  {
    title: "Pengantar Matematika Diskrit",
    author: "Rinaldi Munir",
    category: "Matematika",
    status: "Tersedia",
    cover: "images/katalog/pengantar-matematika-diskrit.jpg",
  },

  {
    title: "Fisika Dasar untuk Sains dan Teknik",
    author: "Ahmedi Asraf | Dr. Budhy Kurniawan, M.Si.",
    category: "Fisika",
    status: "Tersedia",
    cover: "images/katalog/fisika-dasar-untuk-sains-dan-teknik.avif",
  },

  {
    title: "Kimia Dasar 1",
    author: "Syukri S.",
    category: "Kimia",
    status: "Tersedia",
    cover: "images/katalog/kimia-dasar-1.jpg",
  },

  {
    title: "Kimia Dasar",
    author: "Pahriah, M.Pd.",
    category: "Kimia",
    status: "Tersedia",
    cover: "images/katalog/kimia-dasar.jpg",
  },

  {
    title: "IPA | Biologi SMA Kelas X",
    author: "Irnaningtyas | Sylva Sagita",
    category: "Biologi",
    status: "Tersedia",
    cover: "images/katalog/biologi-sma-kelas-x.jpg",
  },

  {
    title: "Biologi | Edisi Kedelapann jilid 3",
    author: "Campbell",
    category: "Biologi",
    status: "Tersedia",
    cover: "images/katalog/biologi-campbell.jpg",
  },

  {
    title: "Dasar Pemrograman Aplikasi Web Menggunakan PHP & Database Neo4J",
    author: "Abdul Kadir",
    category: "Teknologi",
    status: "Tersedia",
    cover: "images/katalog/aplikasi-web.jpg",
  },

  {
    title: "Pemrograman Laravel",
    author: "Ade Rahmat Iskandar | Yono Suryadi",
    category: "Teknologi",
    status: "Tersedia",
    cover: "images/katalog/laravel.png",
  },

  {
    title: "HTML, PHP, dan MySQL untuk Pemula (Update Version)",
    author: "Jubilee Enterprise",
    category: "Teknologi",
    status: "Tersedia",
    cover: "images/katalog/html-php-mysql-untuk-pemula.jpg",
  },

  {
    title: "Tafsir Al-Misbah Volume 1",
    author: "M. Quraish Shihab",
    category: "Agama",
    status: "Tersedia",
    cover: "images/katalog/tafsir-al-misbah-vol1.jpg",
  },

  {
    title: "Pendidikan Agama Islam Interdisipliner untuk Perguruan Tinggi",
    author: "Dr. Nino Indrianto, M. Pd.",
    category: "Agama",
    status: "Tersedia",
    cover: "images/katalog/pendidikan-agama-islam.jpg",
  },

  {
    title: "Sejarah Indonesia Masa Kemerdekaan",
    author: "Dr. Aman, M.Pd.",
    category: "Sejarah Indonesia",
    status: "Tersedia",
    cover: "images/katalog/sejarah-indonesia-masa-kemerdekaan.jpg",
  },

  {
    title: "Bahasa Indonesia untuk Perguruan Tinggi",
    author: "Dr. Siti Ansoriyah, M.Pd.",
    category: "Bahasa Indonesia",
    status: "Tersedia",
    cover: "images/katalog/bahasa-indonesia-untuk-perguruan-tinggi.jpg",
  },

  {
    title: "Sejarah Bahasa Indonesia",
    author: "Akhir Matua Harahap",
    category: "Bahasa Indonesia",
    status: "Tersedia",
    cover: "images/katalog/Sejarah-Bahasa-Indonesia_Akhir-Matua.jpg",
  },

  {
    title: "Essential Grammar in Use | Fourth Edition",
    author: "Raymond Murphy",
    category: "Bahasa Inggris",
    status: "Tersedia",
    cover: "images/katalog/essential-grammar-in-use.jpg",
  },

  {
    title: "English Potato",
    author: "Maula Nikma",
    category: "Bahasa Inggris",
    status: "Tersedia",
    cover: "images/katalog/english-potato.jpg",
  },

  {
    title: "Jago Kuasai Bahasa Arab",
    author: "Siti Maemnah, S.Pd. I",
    category: "Bahasa Arab",
    status: "Tersedia",
    cover: "images/katalog/jago-kuasai-bahasa arab.jpg",
  },

  {
    title: "Mudah belajar bahasa arab untuk pemula",
    author: "Efranjy Agratama",
    category: "Bahasa Arab",
    status: "Tersedia",
    cover: "images/katalog/mudah-belajar-bahasa-arab.jpg",
  },

  {
    title: "Bahasa Jepang untuk pemula",
    author: "Muryani J. Semita",
    category: "Bahasa Jepang",
    status: "Tersedia",
    cover: "images/katalog/bahasa-jepang-untuk-pemula.jpg",
  },

  {
    title: "Bahasa Jepang itu Gampang",
    author: "Hanina Zakiyyah",
    category: "Bahasa Jepang",
    status: "Tersedia",
    cover: "images/katalog/bahasa-jepang-itu-gampang.jpg",
  },

  {
    title: "Panduan Terlengkap Belajar Bahasa Korea",
    author: "M. hasan Hwang",
    category: "Bahasa Korea",
    status: "Tersedia",
    cover: "images/katalog/panduan-belajar-bahasa-korea.jpg",
  },

  {
    title:
      "Bahasa Korea untuk Pemula : Cara Seru Belajar Bahasa Korea Tanpa Bikin Pusing",
    author: "Kinani Dadana",
    category: "Bahasa Korea",
    status: "Tersedia",
    cover: "images/katalog/bahasa-korea-untuk-pemula.jpg",
  },

  {
    title:"Public Speaking 360: Panduan Praktis untuk Public Speaking di Ruang Nyata dan Virtual",
    author: "Ferly Junandar",
    category: "Public Speaking",
    status: "Tersedia",
    cover: "images/katalog/public-speaking.avif",
  },

  {
    title: "Talk Like TED",
    author: "Carmine Gallo",
    category: "Public Speaking",
    status: "Tersedia",
    cover: "images/katalog/talk-like-ted.avif",
  },
];
