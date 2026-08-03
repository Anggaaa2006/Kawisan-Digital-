export type Umkm = {
  id: string;
  nama: string;
  pemilik: string;
  kategori: string;
  badge_color: string;
  tagline: string;
  deskripsi: string;
  spesifikasi_produk: string[];
  rentang_harga: string;
  alamat_lengkap: string;
  wa_number: string;
  maps_url: string;
  image: string;
  icon: string;
  galeri: string[];
  menu_produk: { nama: string; harga: string; deskripsi: string }[];
  keunggulan: string[];
};

export const umkmList: Umkm[] = [
  {
    id: 'kedai-sehat',
    nama: 'Kedai Sehat',
    pemilik: 'Mas Yugo',
    kategori: 'Herbal & Kesehatan',
    badge_color: 'bg-emerald-100 text-emerald-800',
    tagline: 'Meramu Tradisi dengan Nalar Ilmiah (22+ Varian Herbal)',
    deskripsi:
      'Kedai Sehat menggabungkan kearifan lokal rempah nusantara dengan pengetahuan sains. Menyediakan minuman segar herbal, rempah, kopi rempah, dan wedhang tradisional yang berkhasiat menyeimbangkan kesehatan tubuh dan jiwa.',
    spesifikasi_produk: [
      'Bahan: Jahe, Kunyit, Temulawak, Sereh, Kayu Manis, & Rempah Alami',
      'Menu Favorit: Wedhang Kawisanyar (Rp10.000), Kopi Rempah (Rp8.000), Wedhang Seger (Rp7.000)',
      'Fitur Khusus: Bebas pengawet sintetis & dibuat segar sesuai pesanan',
    ],
    rentang_harga: 'Rp 5.000 - Rp 10.000 / porsi',
    alamat_lengkap: 'Jl. Sunan Giri 06 No. 29, Kel. Kawisanyar, Kec. Kebomas, Kab. Gresik',
    wa_number: '6287798842756',
    maps_url: 'https://maps.google.com/?q=Jl.+Sunan+Giri+06+No.+29+Kawisanyar',
    image: '/images/kedai sehat.png',
    icon: 'Leaf',
    galeri: [
      'https://images.pexels.com/photos/36962714/pexels-photo-36962714.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/6962415/pexels-photo-6962415.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/30431322/pexels-photo-30431322.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/6962419/pexels-photo-6962419.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    menu_produk: [
      { nama: 'Wedhang Kawisanyar', harga: 'Rp 10.000', deskripsi: 'Minuman rempah khas with jahe, temulawak, dan sereh' },
      { nama: 'Kopi Rempah', harga: 'Rp 8.000', deskripsi: 'Kopi dengan campuran rempah pilihan untuk stamina' },
      { nama: 'Wedhang Seger', harga: 'Rp 7.000', deskripsi: 'Minuman segar penyeimbang tubuh' },
      { nama: 'Jamu Kunyit Asem', harga: 'Rp 6.000', deskripsi: 'Jamu tradisional untuk melancarkan pencernaan' },
    ],
    keunggulan: [
      '22+ varian minuman herbal yang dibuat segar',
      'Bahan rempah alami langsung dari petani lokal',
      'Bebas pengawet sintetis',
      'Resep warisan dengan pendekatan ilmiah',
    ],
  },
  {
    id: 'kue-ruchana',
    nama: 'Kue Kentang & Sekotor Ibu Ruchana',
    pemilik: 'Ibu Ruchana',
    kategori: 'Kuliner Tradisional',
    badge_color: 'bg-amber-100 text-amber-800',
    tagline: 'Kuliner Autentik Khas Kawisanyar (P-IRT Resmi)',
    deskripsi:
      'Jajanan tradisional khas Kawisanyar yang gurih dan legit. Dibuat secara higienis dengan resep warisan keluarga. Sangat diminati untuk hidangan hajatan, acara lamaran, pengajian, dan konsumsi rapat kantor.',
    spesifikasi_produk: [
      'Izin Resmi: P-IRT. 3063525011245-20',
      'Varian 1: Kue Kentang (Bahan: Kentang asli, telur, gula, mentega - Rasa manis-legit)',
      'Varian 2: Kue Sekotor / Sekotong (Bahan: Tepung beras & santan murni - Rasa gurih)',
      'Jam Buka: Setiap Pagi (Menerima Pre-Order & Pesanan Partai/Box)',
    ],
    rentang_harga: 'Rp 1.200 / pcs (Paket Rp10.000 = 8 pcs, Rp20.000 = 20 pcs)',
    alamat_lengkap: 'Jl. Sunan Giri VI No. 45, Kel. Kawisanyar, Kec. Kebomas, Kab. Gresik',
    wa_number: '6282139094119',
    maps_url: 'https://maps.google.com/?q=Jl.+Sunan+Giri+VI+No.+45+Kawisanyar',
    image: '/images/Ibu Ruchana.jpeg',
    icon: 'Cookie',
    galeri: [
      'https://images.pexels.com/photos/37107008/pexels-photo-37107008.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/37107040/pexels-photo-37107040.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/37145324/pexels-photo-37145324.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/7429685/pexels-photo-7429685.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    menu_produk: [
      { nama: 'Kue Kentang', harga: 'Rp 1.200 / pcs', deskripsi: 'Kentang asli, telur, gula, mentega - manis-legit' },
      { nama: 'Kue Sekotor', harga: 'Rp 1.200 / pcs', deskripsi: 'Tepung beras & santan murni - gurih' },
      { nama: 'Paket Hemat 8 pcs', harga: 'Rp 10.000', deskripsi: 'Campuran kue khas Kawisanyar' },
      { nama: 'Paket Partai 20 pcs', harga: 'Rp 20.000', deskripsi: 'Untuk acara & hajatan' },
    ],
    keunggulan: [
      'Bersertifikat P-IRT resmi (higienis terjamin)',
      'Resep warisan keluarga turun-temurun',
      'Menerima pre-order & pesanan box partai',
      'Bahan kentang asli tanpa pengganti',
    ],
  },
  {
    id: 'wajan-gapura-mas',
    nama: "Wajan Aluminium 'Gapura Mas'",
    pemilik: 'Pengrajin Wajan RW 01',
    kategori: 'Peralatan Dapur & Manufaktur',
    badge_color: 'bg-blue-100 text-blue-800',
    tagline: 'Wajan Cor Aluminium Daur Ulang Tebal & Tahan Lama',
    deskripsi:
      "Produsen wajan cor aluminium super tebal dan tahan lama. Diproduksi dari leburan aluminium pilihan berkualitas. Jauh lebih kokoh dibanding wajan impor/teflon tipis.",
    spesifikasi_produk: [
      'Bahan Baku: Aluminium Cor Daur Ulang Pilihan (Tebal & Tidak Mudah Bocor)',
      'Ukuran Tersedia: 10 Inci (~25cm) hingga 30 Inci (~80cm Jumbo Hajatan)',
      'Varian Harga: 10 Inci (Rp16.000), 12-16 Inci (Rp25.000 - Rp50.000), 30 Inci Jumbo (Rp80.000+)',
      'Sistem Penjualan: Eceran, Grosir, & Suplai Distributor Luar Daerah',
    ],
    rentang_harga: 'Rp 16.000 - Rp 80.000+ / unit',
    alamat_lengkap: '30 Jl. Sunan Giri 4,Kel.Kawisanyar, Kec.Kebomas, Kab.Gresik',
    wa_number: '6281234567890',
    maps_url: 'https://maps.app.goo.gl/yv583M4Ku1w2yckE8',
    image: '/images/Gapura Mas.png',
    icon: 'CookingPot',
    galeri: [
      'https://images.pexels.com/photos/18340384/pexels-photo-18340384.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/175754/pexels-photo-175754.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/31521713/pexels-photo-31521713.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/10936545/pexels-photo-10936545.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    menu_produk: [
      { nama: 'Wajan 10 Inci', harga: 'Rp 16.000', deskripsi: 'Diameter ~25cm, cocok untuk rumah tangga' },
      { nama: 'Wajan 12-16 Inci', harga: 'Rp 25.000 - Rp 50.000', deskripsi: 'Ukuran sedang untuk dapur skala menengah' },
      { nama: 'Wajan 30 Inci Jumbo', harga: 'Rp 80.000+', deskripsi: 'Diameter ~80cm, khusus hajatan & catering' },
    ],
    keunggulan: [
      'Aluminium cor super tebal, tidak mudah bocor',
      'Tahan lama, jauh lebih kokoh dari wajan impor',
      'Tersedia ukuran 10 hingga 30 inci',
      'Melayani eceran, grosir, & distributor luar daerah',
    ],
  },
  {
    id: 'cv-nurul-hudi',
    nama: 'CV. NURUL HUDI (Rotary / Triplek Lengkung)',
    pemilik: 'CV. Nurul Hudi',
    kategori: 'Industri & Manufaktur B2B',
    badge_color: 'bg-slate-100 text-slate-800',
    tagline: 'Triplek Lengkung Matras Pisau Cetakan Kardus Pabrik',
    deskripsi:
      'Spesialis manufaktur triplek lengkung presisi berlapis (Die-Cut Mold) untuk matras pisau pemotong kardus kemasan industri (kardus kulkas, mi instan, kardus TV). Berbadan hukum resmi CV.',
    spesifikasi_produk: [
      'Legalitas Usaha: Terdaftar Resmi CV (Memenuhi Syarat Vendor Pabrik)',
      'Dimensi Standar: Tinggi 2400 mm (Panjang 2,4 Meter)',
      'Pilihan Type/Ukuran: D-320 (Rp1.150.000), D-360 (Rp1.200.000), D-487 (Rp2.000.000)',
      'Pengiriman: Sistem Paket 10 pcs / Partai Besar ke Pabrik Kertas & Kardus',
    ],
    rentang_harga: 'Rp 1.150.000 - Rp 2.000.000 / pcs',
    alamat_lengkap: 'Kelurahan Kawisanyar, Kebomas, Kabupaten Gresik',
    wa_number: '6281234567891',
    maps_url: 'https://maps.google.com/?q=Kawisanyar+Kebomas+Gresik',
    image: 'https://images.pexels.com/photos/10316634/pexels-photo-10316634.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'Factory',
    galeri: [
      'https://images.pexels.com/photos/10316634/pexels-photo-10316634.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/12278567/pexels-photo-12278567.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/12278592/pexels-photo-12278592.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/10039994/pexels-photo-10039994.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    menu_produk: [
      { nama: 'Type D-320', harga: 'Rp 1.150.000', deskripsi: 'Triplek lengkung presisi, tinggi 2400 mm' },
      { nama: 'Type D-360', harga: 'Rp 1.200.000', deskripsi: 'Triplek lengkung presisi, tinggi 2400 mm' },
      { nama: 'Type D-487', harga: 'Rp 2.000.000', deskripsi: 'Tipe premium untuk matras pisau kardus industri' },
    ],
    keunggulan: [
      'Berbadan hukum resmi CV (memenuhi syarat vendor pabrik)',
      'Presisi Die-Cut Mold untuk kardus kulkas, mi instan, TV',
      'Pengiriman sistem partai besar 10 pcs',
      'Dimensi standar 2400 mm untuk industri kertas & kardus',
    ],
  },
];

export function getUmkmById(id: string): Umkm | undefined {
  return umkmList.find((u) => u.id === id);
}
