import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-br from-white via-zinc-50 to-sky-50/30 page-section-divider">
      <div className="content-width relative z-10 max-w-md">
        <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-400 mb-4">
          Halaman tidak ditemukan
        </p>
        <h1 className="text-6xl md:text-7xl font-semibold text-sky-600 mb-4 tracking-tight">
          404
        </h1>
        <p className="text-sm text-zinc-500 mb-8 leading-relaxed">
          Halaman yang Anda cari tidak ada atau sudah dipindahkan.
        </p>
        <Link href="/" className="btn-primary">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
