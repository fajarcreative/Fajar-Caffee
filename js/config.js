/**
 * ==============================================================================
 * FAJAR CAFE & BISTRO - PUSAT PENGATURAN WEBSITE (CONFIG.JS)
 * ==============================================================================
 * File ini digunakan untuk mengkustomisasi seluruh informasi, teks, kontak,
 * daftar menu, harga, serta semua gambar di website Fajar Cafe.
 * 
 * Cukup ubah nilai di file ini, maka seluruh halaman website akan otomatis 
 * menyesuaikan tanpa perlu mengubah kode HTML satu per satu.
 * ==============================================================================
 */

(function (window) {
  'use strict';

  // Deteksi basePath relatif terhadap dokumen HTML yang memanggil config.js
  let basePath = './';
  try {
    const scripts = document.getElementsByTagName('script');
    for (let i = scripts.length - 1; i >= 0; i--) {
      const src = scripts[i].getAttribute('src') || '';
      if (src.includes('config.js')) {
        if (src.startsWith('../')) {
          basePath = '../';
        } else {
          basePath = './';
        }
        break;
      }
    }
  } catch (e) {}

  if (basePath === './') {
    const path = (window.location && window.location.pathname) || '';
    if (path.includes('/fajar_cafe_')) {
      basePath = '../';
    }
  }

  function resolvePath(assetPath) {
    if (!assetPath) return '';
    if (assetPath.startsWith('http://') || assetPath.startsWith('https://') || assetPath.startsWith('data:')) {
      return assetPath;
    }
    // Bersihkan awalan ./ atau ../
    const clean = assetPath.replace(/^(\.\/|\.\.\/)+/, '');
    return basePath + clean;
  }

  const CONFIG = {
    // --------------------------------------------------------------------------
    // 1. INFORMASI DASAR KAFE & BISTRO
    // --------------------------------------------------------------------------
    info: {
      namaKafe: "Fajar Cafe",
      namaLengkap: "Fajar Cafe & Bistro",
      slogan: "Sajian Kopi Artisan Nusantara & Bistro Fusi Modern",
      deskripsi: "Sajian kopi artisan nusantara dan bistro fusi modern dalam kehangatan santap bernuansa tropis Jakarta Selatan.",
      alamat: "Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12190",
      kota: "Jakarta Selatan",
      
      // Kontak & WhatsApp Resmi (Digunakan untuk notifikasi & bill kasir)
      whatsapp: "082338903403",
      whatsappDisplay: "+62 823-3890-3403",
      whatsappInternasional: "6282338903403",
      
      // Media Sosial
      instagram: "@fajarcafe.jkt",
      instagramUrl: "https://instagram.com/fajarcafe.jkt",
      
      // Jam Operasional
      jamBukaHari: "Senin — Minggu",
      jamBukaPukul: "07.00 — 22.00 WIB",
      statusLayanan: "Dine-in, Takeaway & Delivery",
      
      // Footer & Copyright
      tahunHakCipta: "2025",
      hakCiptaTeks: "© 2025 Fajar Cafe & Bistro Jakarta. Seluruh hak cipta dilindungi."
    },

    // --------------------------------------------------------------------------
    // 2. KUSTOMISASI SELURUH GAMBAR WEBSITE (SEMUA ADA DI FOLDER assets/images)
    // --------------------------------------------------------------------------
    gambar: {
      // Logo Resmi Kafe
      logo: "assets/images/fajar-cafe-logo.png",
      
      // Banner Utama Beranda (Hero Barista)
      heroBarista: "assets/images/hero-barista-pourover.jpg",
      
      // 3 Menu Favorit Utama Beranda
      favoritKopiSusu: "assets/images/favorit-kopi-susu.jpg",
      favoritCroissant: "assets/images/favorit-croissant-almond.jpg",
      favoritNasiGoreng: "assets/images/favorit-nasi-goreng.jpg",
      
      // Galeri Suasana & Cerita Kafe (Story Section)
      galeriInterior: "assets/images/story-cafe-interior.jpg",
      galeriMesinEspresso: "assets/images/story-espresso-machine.jpg",
      galeriSudutSantai: "assets/images/story-cozy-corner.jpg",
      galeriTerasOutdoor: "assets/images/story-outdoor-terrace.jpg",
      
      // Gambar Kategori Menu
      menuKopiSusu: "assets/images/menu-kopi-susu.jpg",
      menuEspressoDobel: "assets/images/menu-espresso-dobel.jpg",
      menuSpanishLatte: "assets/images/menu-spanish-latte.jpg",
      menuManualBrew: "assets/images/menu-manual-brew.jpg",
      menuArtisanTea: "assets/images/menu-artisan-tea.jpg",
      menuMatchaLatte: "assets/images/menu-matcha-latte.jpg",
      menuNasiGoreng: "assets/images/menu-nasi-goreng.jpg",
      menuPastaMie: "assets/images/menu-pasta-mie.jpg",
      menuToastSrikaya: "assets/images/menu-toast-srikaya.jpg",
      menuCroissant: "assets/images/menu-croissant.jpg",
      menuCheesecake: "assets/images/menu-cheesecake.jpg",
      menuSnackCrispy: "assets/images/menu-snack-crispy.jpg",
      
      // Gambar Cadangan jika menu belum memiliki foto
      menuFallback: "assets/images/menu-default-fallback.jpg"
    },

    // --------------------------------------------------------------------------
    // 3. PENGATURAN TRANSAKSI, PAJAK & QRIS
    // --------------------------------------------------------------------------
    transaksi: {
      kodeOrderPrefix: "FJR",
      pajakRestoranPersen: 10,       // 10% Pajak Restoran (PB1)
      diskonPromoPersen: 10,         // 10% Potongan Promo Online
      maksNomorMeja: 35,             // Meja 1 sampai 35
      qrisNmid: "0092-FAJARCAFE-JKT",
      qrisMerchantName: "FAJAR CAFE",
      qrisCity: "JAKARTA",
      qrisPostalCode: "12190"
    },

    // --------------------------------------------------------------------------
    // 4. KATALOG LENGKAP SELURUH MENU (32 MENU RESMI)
    // --------------------------------------------------------------------------
    // Anda bisa mengubah nama, harga, deskripsi, kategori, maupun gambarnya di sini.
    menu: [
      // --- SIGNATURE ESPRESSO ---
      {
        id: "kopi-susu-fajar",
        nama: "Kopi Susu Fajar",
        kategori: "espresso",
        kategoriLabel: "Signature Espresso",
        harga: 28000,
        deskripsi: "Espresso robusta-arabika fusi dengan gula aren organik dan susu segar murni.",
        gambar: "assets/images/menu-kopi-susu.jpg",
        badge: "Favorit #1",
        isHighlight: true
      },
      {
        id: "espresso-dobel-fajar",
        nama: "Espresso Dobel Fajar",
        kategori: "espresso",
        kategoriLabel: "Signature Espresso",
        harga: 22000,
        deskripsi: "Ekstraksi ganda biji kopi House Blend Fajar, crema tebal dengan aroma cokelat nutty pekat.",
        gambar: "assets/images/menu-espresso-dobel.jpg",
        badge: "Pekat"
      },
      {
        id: "iced-spanish-latte",
        nama: "Iced Spanish Latte",
        kategori: "espresso",
        kategoriLabel: "Signature Espresso",
        harga: 32000,
        deskripsi: "Kombinasi espresso segar, susu evaporasi lembut, dan kental manis premium dingin menyegarkan.",
        gambar: "assets/images/menu-spanish-latte.jpg",
        badge: "Best Seller"
      },
      {
        id: "americano-madu-sumbawa",
        nama: "Americano Madu Sumbawa",
        kategori: "espresso",
        kategoriLabel: "Signature Espresso",
        harga: 26000,
        deskripsi: "Espresso arabika gayo diseduh air dingin dengan sentuhan pemanis madu hutan liar Sumbawa.",
        gambar: "assets/images/menu-espresso-dobel.jpg",
        badge: "Segar Alami"
      },
      {
        id: "piccolo-coffee",
        nama: "Piccolo Coffee",
        kategori: "espresso",
        kategoriLabel: "Signature Espresso",
        harga: 25000,
        deskripsi: "Ristretto intens dipadu steamed milk hangat dalam takaran gelas 100ml yang seimbang.",
        gambar: "assets/images/menu-manual-brew.jpg",
        badge: "Intens"
      },
      {
        id: "affogato-vanilla",
        nama: "Affogato Vanilla",
        kategori: "espresso",
        kategoriLabel: "Signature Espresso",
        harga: 30000,
        deskripsi: "Satu scoop es krim gelato vanilla premium disiram shot espresso arabika panas segar.",
        gambar: "assets/images/menu-kopi-susu.jpg",
        badge: "Dessert Coffee"
      },
      {
        id: "caramel-macchiato-panas",
        nama: "Caramel Macchiato Panas",
        kategori: "espresso",
        kategoriLabel: "Signature Espresso",
        harga: 34000,
        deskripsi: "Susu lembut berbusa mikro, sirup vanilla madu, espresso segar dan lelehan saus karamel.",
        gambar: "assets/images/menu-spanish-latte.jpg",
        badge: "Manis Gurih"
      },
      {
        id: "cold-brew-vanilla-cream",
        nama: "Cold Brew Vanilla Cream",
        kategori: "espresso",
        kategoriLabel: "Signature Espresso",
        harga: 33000,
        deskripsi: "Kopi seduh dingin selama 16 jam dituang dengan lapisan cream vanilla gurih di atasnya.",
        gambar: "assets/images/menu-kopi-susu.jpg",
        badge: "16h Steeped"
      },

      // --- MANUAL BREW & SINGLE ORIGIN ---
      {
        id: "manual-brew-v60-gayo",
        nama: "Manual Brew V60 Gayo Anaerob",
        kategori: "manualbrew",
        kategoriLabel: "Manual Brew",
        harga: 35000,
        deskripsi: "Biji arabika Aceh Gayo proses fermentasi anaerob dengan notes buah persik, kismis, dan winey.",
        gambar: "assets/images/menu-manual-brew.jpg",
        badge: "Single Origin"
      },
      {
        id: "aeropress-toraja-sapan",
        nama: "Aeropress Toraja Sapan",
        kategori: "manualbrew",
        kategoriLabel: "Manual Brew",
        harga: 34000,
        deskripsi: "Seduhan tekanan aeropress menghasilkan body bersih dengan rasa rempah halus dan cokelat hitam.",
        gambar: "assets/images/menu-manual-brew.jpg",
        badge: "Clean Body"
      },
      {
        id: "french-press-flores-bajawa",
        nama: "French Press Flores Bajawa",
        kategori: "manualbrew",
        kategoriLabel: "Manual Brew",
        harga: 32000,
        deskripsi: "Karakter tebal dan earthy khas Bajawa dengan aroma karamel panggang dan tembakau manis.",
        gambar: "assets/images/menu-manual-brew.jpg",
        badge: "Bold"
      },
      {
        id: "japanese-iced-drip-bali",
        nama: "Japanese Iced Drip Bali Kintamani",
        kategori: "manualbrew",
        kategoriLabel: "Manual Brew",
        harga: 36000,
        deskripsi: "Drip langsung ke atas es batu, menonjolkan keasaman jeruk kintamani yang cerah dan floral segar.",
        gambar: "assets/images/menu-manual-brew.jpg",
        badge: "Citrusy"
      },
      {
        id: "tubruk-fine-robusta-dampit",
        nama: "Tubruk Fine Robusta Dampit",
        kategori: "manualbrew",
        kategoriLabel: "Manual Brew",
        harga: 20000,
        deskripsi: "Gaya seduh tradisional nusantara dengan robusta unggulan Dampit Malang, minim ampas dan harum.",
        gambar: "assets/images/menu-espresso-dobel.jpg",
        badge: "Tradisional"
      },
      {
        id: "cascara-lemon-tea",
        nama: "Cascara Lemon Tea",
        kategori: "manualbrew",
        kategoriLabel: "Manual Brew",
        harga: 27000,
        deskripsi: "Seduhan kulit ceri kopi organik dipadukan dengan perasan lemon segar dan madu bunga kopi.",
        gambar: "assets/images/menu-artisan-tea.jpg",
        badge: "Antioksidan"
      },

      // --- MATCHA, CHOCOLATE & ARTISAN TEA ---
      {
        id: "matcha-kyoto-latte",
        nama: "Matcha Kyoto Latte",
        kategori: "noncoffee",
        kategoriLabel: "Non-Coffee & Tea",
        harga: 30000,
        deskripsi: "Bubuk matcha murni Uji Kyoto kualitas ceremonial grade diaduk susu murni segar hangat/dingin.",
        gambar: "assets/images/menu-matcha-latte.jpg",
        badge: "Ceremonial"
      },
      {
        id: "hojicha-roasted-latte",
        nama: "Hojicha Roasted Latte",
        kategori: "noncoffee",
        kategoriLabel: "Non-Coffee & Tea",
        harga: 32000,
        deskripsi: "Teh hijau sangrai aroma beras terpanggang (smoky nutty) dengan susu segar bertekstur lembut.",
        gambar: "assets/images/menu-matcha-latte.jpg",
        badge: "Smoky Nutty"
      },
      {
        id: "artisanal-earl-grey-citrus",
        nama: "Artisanal Earl Grey Citrus",
        kategori: "noncoffee",
        kategoriLabel: "Non-Coffee & Tea",
        harga: 28000,
        deskripsi: "Teh hitam Ceylon beraroma minyak bergamot Italia disajikan dingin dengan irisan buah jeruk sunkist.",
        gambar: "assets/images/menu-artisan-tea.jpg",
        badge: "Refreshing"
      },
      {
        id: "jasmine-blossom-tea",
        nama: "Jasmine Blossom Tea",
        kategori: "noncoffee",
        kategoriLabel: "Non-Coffee & Tea",
        harga: 24000,
        deskripsi: "Kuntum bunga melati asli dipetik subuh, menyatu dengan pucuk daun teh hijau pegunungan Jawa.",
        gambar: "assets/images/menu-artisan-tea.jpg",
        badge: "Wangi Alami"
      },
      {
        id: "rosella-punch-fresca",
        nama: "Rosella Punch Fresca",
        kategori: "noncoffee",
        kategoriLabel: "Non-Coffee & Tea",
        harga: 27000,
        deskripsi: "Seduhan kelopak bunga rosella merah asam manis alami dengan soda dingin dan biji selasih.",
        gambar: "assets/images/menu-artisan-tea.jpg",
        badge: "Fizzy Sour"
      },
      {
        id: "chamomile-mint-honey",
        nama: "Chamomile Mint Honey",
        kategori: "noncoffee",
        kategoriLabel: "Non-Coffee & Tea",
        harga: 26000,
        deskripsi: "Infusi herbal menenangkan dari bunga chamomile kering, daun mint segar, dan madu multiflora.",
        gambar: "assets/images/menu-artisan-tea.jpg",
        badge: "Calming"
      },
      {
        id: "artisan-dark-chocolate",
        nama: "Artisan Dark Chocolate Cream",
        kategori: "noncoffee",
        kategoriLabel: "Non-Coffee & Tea",
        harga: 32000,
        deskripsi: "Cokelat hitam murni 70% asal Tabanan Bali dicairkan bersama susu murni gurih kental.",
        gambar: "assets/images/menu-spanish-latte.jpg",
        badge: "70% Cocoa"
      },

      // --- MAKANAN UTAMA NUSANTARA ---
      {
        id: "nasi-goreng-kampung-fajar",
        nama: "Nasi Goreng Kampung Fajar",
        kategori: "makanan",
        kategoriLabel: "Makanan Nusantara",
        harga: 45000,
        deskripsi: "Nasi goreng bumbu terasi bakar dan bawang merah melimpah, sate ayam bumbu kacang, telur ceplok, dan emping.",
        gambar: "assets/images/menu-nasi-goreng.jpg",
        badge: "Favorit #3",
        isHighlight: true
      },
      {
        id: "spaghetti-aglio-olio-cakalang",
        nama: "Spaghetti Aglio Olio Cakalang",
        kategori: "makanan",
        kategoriLabel: "Makanan Nusantara",
        harga: 48000,
        deskripsi: "Spaghetti al dente ditumis minyak zaitun, bawang putih, cabai rawit, dan suwiran ikan cakalang asap Manado.",
        gambar: "assets/images/menu-pasta-mie.jpg",
        badge: "Fusi Spesial"
      },
      {
        id: "rawon-brisket-12-jam",
        nama: "Rawon Brisket 12 Jam",
        kategori: "makanan",
        kategoriLabel: "Makanan Nusantara",
        harga: 58000,
        deskripsi: "Kuah kluwek hitam rempah medok dengan potongan daging brisket empuk dimasak lambat, sambal terasi dan taoge pendek.",
        gambar: "assets/images/menu-nasi-goreng.jpg",
        badge: "Slow Cooked"
      },
      {
        id: "ayam-goreng-lengkuas-matah",
        nama: "Ayam Goreng Lengkuas Sambal Matah",
        kategori: "makanan",
        kategoriLabel: "Makanan Nusantara",
        harga: 42000,
        deskripsi: "Ayam ungkep bumbu kuning berbalut serundeng lengkuas renyah disajikan dengan sambal matah Bali segar.",
        gambar: "assets/images/menu-nasi-goreng.jpg",
        badge: "Gurih Pedas"
      },
      {
        id: "mie-goreng-jawa-khas-fajar",
        nama: "Mie Goreng Jawa Khas Fajar",
        kategori: "makanan",
        kategoriLabel: "Makanan Nusantara",
        harga: 38000,
        deskripsi: "Mie telur pipih dimasak kecap manis karamelisasi, suwiran ayam kampung, bakso sapi, dan taburan bawang goreng.",
        gambar: "assets/images/menu-pasta-mie.jpg",
        badge: "Wok Hei"
      },

      // --- PASTRY, TOAST & DESSERT ---
      {
        id: "croissant-almond",
        nama: "Croissant Almond",
        kategori: "pastry",
        kategoriLabel: "Pastry & Kudapan",
        harga: 34000,
        deskripsi: "Pastry mentega Prancis berlapis renyah dengan isian frangipane almond manis dan taburan almond iris gurih.",
        gambar: "assets/images/menu-croissant.jpg",
        badge: "Favorit #2",
        isHighlight: true
      },
      {
        id: "toast-roti-bakar-srikaya",
        nama: "Toast Roti Bakar Srikaya Butter",
        kategori: "pastry",
        kategoriLabel: "Pastry & Kudapan",
        harga: 26000,
        deskripsi: "Roti brioche tebal dipanggang renyah beraroma arang, selai srikaya pandan santan asli dan potongan butter beku.",
        gambar: "assets/images/menu-toast-srikaya.jpg",
        badge: "Kopitiam Style"
      },
      {
        id: "basque-burnt-cheesecake",
        nama: "Basque Burnt Cheesecake",
        kategori: "pastry",
        kategoriLabel: "Pastry & Kudapan",
        harga: 36000,
        deskripsi: "Kue keju panggang Spanyol bertekstur lumer lembut di bagian tengah dengan permukaan karamel gelap legit.",
        gambar: "assets/images/menu-cheesecake.jpg",
        badge: "Melt In Mouth"
      },
      {
        id: "singkong-goreng-keju-crispy",
        nama: "Singkong Goreng Keju Crispy",
        kategori: "pastry",
        kategoriLabel: "Pastry & Kudapan",
        harga: 24000,
        deskripsi: "Singkong mentega merekah empuk dengan bumbu ketumbar bawang putih renyah, ditaburi keju cheddar melimpah.",
        gambar: "assets/images/menu-snack-crispy.jpg",
        badge: "Camilan Favorit"
      },
      {
        id: "banana-fritters-brown-sugar",
        nama: "Banana Fritters Brown Sugar",
        kategori: "pastry",
        kategoriLabel: "Pastry & Kudapan",
        harga: 25000,
        deskripsi: "Pisang kepok madu digoreng balut adonan wijen krispi, disiram gula palem cair dan taburan kayu manis bubuk.",
        gambar: "assets/images/menu-snack-crispy.jpg",
        badge: "Crispy Sweet"
      },
      {
        id: "cinnamon-roll-butter-cream",
        nama: "Cinnamon Roll Butter Cream",
        kategori: "pastry",
        kategoriLabel: "Pastry & Kudapan",
        harga: 30000,
        deskripsi: "Roti gulung rempah kayu manis harum disajikan hangat dengan olesan cream cheese glaze lumer gurih.",
        gambar: "assets/images/menu-croissant.jpg",
        badge: "Warm Glaze"
      }
    ],

    // --------------------------------------------------------------------------
    // 5. FUNGSI PEMBANTU (HELPER FUNCTIONS)
    // --------------------------------------------------------------------------
    resolvePath: resolvePath,

    /**
     * Mengambil URL aset gambar yang aman untuk halaman manapun (root atau subfolder)
     */
    getAssetUrl: function (keyOrPath) {
      if (!keyOrPath) return resolvePath(CONFIG.gambar.menuFallback);
      if (CONFIG.gambar[keyOrPath]) {
        return resolvePath(CONFIG.gambar[keyOrPath]);
      }
      return resolvePath(keyOrPath);
    },

    /**
     * Menghasilkan cache gambar & harga untuk checkout secara instan
     */
    getMenuCache: function () {
      const cache = {};
      CONFIG.menu.forEach(item => {
        cache[item.nama] = {
          price: item.harga,
          img: resolvePath(item.gambar)
        };
      });
      // Aliases untuk variasi nama menu di Beranda agar sinkron dengan checkout
      if (cache['Kopi Susu Fajar']) {
        cache['Kopi Susu Gula Aren Fajar'] = {
          price: cache['Kopi Susu Fajar'].price,
          img: resolvePath(CONFIG.gambar.favoritKopiSusu || cache['Kopi Susu Fajar'].img)
        };
      }
      if (cache['Croissant Almond']) {
        cache['Croissant Almond Panggang'] = {
          price: cache['Croissant Almond'].price,
          img: resolvePath(CONFIG.gambar.favoritCroissant || cache['Croissant Almond'].img)
        };
      }
      if (cache['Nasi Goreng Kampung Fajar']) {
        cache['Nasi Goreng Kampung Fajar'].img = resolvePath(CONFIG.gambar.favoritNasiGoreng || cache['Nasi Goreng Kampung Fajar'].img);
      }
      return cache;
    },

    /**
     * Alias getMenuImagesCache untuk kompatibilitas langsung dengan checkout_bayar_langsung
     */
    getMenuImagesCache: function () {
      return this.getMenuCache();
    },

    /**
     * Memuat kustomisasi dinamis yang disimpan pengguna melalui panel customizer
     */
    loadCustomOverrides: function () {
      try {
        const saved = localStorage.getItem('fajar_custom_config');
        if (saved) {
          const custom = JSON.parse(saved);
          if (custom.info) Object.assign(CONFIG.info, custom.info);
          if (custom.gambar) Object.assign(CONFIG.gambar, custom.gambar);
          if (custom.transaksi) Object.assign(CONFIG.transaksi, custom.transaksi);
          if (Array.isArray(custom.menu) && custom.menu.length > 0) {
            CONFIG.menu = custom.menu;
          }
        }
      } catch (e) {}
    },

    /**
     * Menyimpan kustomisasi ke localStorage agar langsung aktif di semua halaman
     */
    saveCustomOverrides: function (customData) {
      try {
        localStorage.setItem('fajar_custom_config', JSON.stringify(customData));
        return true;
      } catch (e) {
        return false;
      }
    },

    /**
     * Menghapus kustomisasi dan kembali ke pengaturan awal
     */
    resetToDefault: function () {
      try {
        localStorage.removeItem('fajar_custom_config');
        return true;
      } catch (e) {
        return false;
      }
    },

    /**
     * Mengaplikasikan konfigurasi secara otomatis ke seluruh elemen halaman HTML
     */
    applyToPage: function () {
      CONFIG.loadCustomOverrides();

      function runApply() {
        // 1. Terapkan gambar bertanda data-config-img
        document.querySelectorAll('[data-config-img]').forEach(el => {
          const key = el.getAttribute('data-config-img');
          if (CONFIG.gambar[key]) {
            el.src = resolvePath(CONFIG.gambar[key]);
          }
        });

        // 2. Terapkan teks bertanda data-config
        document.querySelectorAll('[data-config]').forEach(el => {
          const key = el.getAttribute('data-config');
          if (CONFIG.info[key] !== undefined) {
            el.textContent = CONFIG.info[key];
          }
        });

        // 3. Terapkan logo kafe pada seluruh elemen img logo standar
        document.querySelectorAll('img[alt*="Logo"], img[alt*="logo"]').forEach(el => {
          if (!el.getAttribute('data-preserve-src')) {
            el.src = resolvePath(CONFIG.gambar.logo);
          }
        });

        // 4. Update nomor WhatsApp di footer atau tombol kontak jika diubah di config.js
        const waNum = CONFIG.info.whatsapp || '082338903403';
        const waDisplay = CONFIG.info.whatsappDisplay || ('+62 ' + waNum);
        document.querySelectorAll('p, span, a').forEach(el => {
          if (el.children.length === 0) {
            if (el.textContent.includes('0823-3890-3403') || el.textContent.includes('082338903403')) {
              el.textContent = el.textContent.replace(/\+?62\s*823[- ]?3890[- ]?3403|082338903403/g, waDisplay);
            }
          }
        });

        // 5. Sinkronisasi kartu menu jika ada di halaman fajar_cafe_semua_menu_pemesanan
        const menuMap = {};
        CONFIG.menu.forEach(item => {
          menuMap[item.nama] = item;
        });

        document.querySelectorAll('.menu-item-card').forEach(card => {
          const name = card.getAttribute('data-name');
          const item = menuMap[name];
          if (item) {
            const img = card.querySelector('img');
            if (img && item.gambar) {
              img.src = resolvePath(item.gambar);
            }
            if (item.harga) {
              card.setAttribute('data-price', item.harga);
              const priceEls = card.querySelectorAll('span');
              priceEls.forEach(sp => {
                if (sp.textContent.trim().startsWith('Rp ')) {
                  sp.textContent = 'Rp ' + Number(item.harga).toLocaleString('id-ID');
                }
              });
            }
          }
        });
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', runApply);
      } else {
        runApply();
      }
    }
  };

  CONFIG.resolvePath = resolvePath;

  // Daftarkan ke objek global window
  window.CONFIG = CONFIG;
  window.FAJAR_CONFIG = CONFIG;

  // Jalankan auto-apply ke halaman saat config.js dimuat
  CONFIG.applyToPage();

})(window);
