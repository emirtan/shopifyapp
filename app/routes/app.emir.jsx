export default function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sol Menü (Sidebar) */}
      <aside className="w-64 flex-shrink-0 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-bold">Customer Panel</h2>
        </div>
        <nav className="mt-4 px-2">
          {/* Aktif menü öğesi (Dashboard) */}
          {/* Diğer menü öğeleri */}
          {/* ... Diğer menü linklerini buraya ekleyebilirsiniz ... */}
        </nav>
      </aside>

      {/* Ana İçerik Alanı (Üst Bar + Sayfa İçeriği) */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Üst Bar (Navbar) */}
        <header className="flex justify-between items-center p-4 bg-white border-b">
          <div className="flex items-center">
            {/* Arama Çubuğu */}
            <input
              type="text"
              placeholder="Search orders, tickets etc."
              className="px-3 py-2 border rounded-md"
            />
            {/* Diğer üst menü öğeleri */}
            <span className="ml-4 text-sm text-gray-600">
h
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold">
              + New
            </button>
            {/* İkonlar (şimdilik yer tutucu) */}
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div> {/* Bildirim */}
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div> {/* Profil */}
          </div>
        </header>

        {/* Değişken Sayfa İçeriği (Outlet) */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
        </main>
      </div>
    </div>
  );
}