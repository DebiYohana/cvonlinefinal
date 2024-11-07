function RowPekerjaan(props:any) {
    return (
      <div className="border-2 border-yellow-200/75 rounded-lg bg-white-800 p-2 my-5">
        <div className="container mx-auto ">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-4 ">{props.Sebagai}</div>
            <div className="col-span-12 md:col-span-4 ">{props.Instansi}</div>
            <div className="col-span-12 md:col-span-4 ">{props.tahun}</div>
          </div>
        </div>
      </div>
    );
}

export default function RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2xl">Riwayat Pekerjaan</h2>
        <RowPekerjaan Sebagai="Staff Administrasi" Instansi="BPJS Ketenagakerjaan" tahun="2025" />
        <RowPekerjaan Sebagai="Assistant Manager" Instansi="Unilever" tahun="2028" />
        <RowPekerjaan Sebagai="Staff Accounting" Instansi="Unilever" tahun="2029" />
        <RowPekerjaan Sebagai="HRD" Instansi="Unilever" tahun="2030" />
        </div>
    )
}









































































