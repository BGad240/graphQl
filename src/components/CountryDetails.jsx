export default function CountryDetails({ country }) {
    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-4 font-sans">

            {/* 2. تصميم البطاقة بأسلوب جديد مع حدود وظل ناعم */}
            <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">

                {/* رأس البطاقة: تم تعديل الهوامش والألوان */}
                <div className="text-center p-6 border-b border-slate-200 dark:border-slate-700">
                    <h1 className="text-6xl mb-2">{country.emoji}</h1>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                        {country.name}
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Code: {country.code}
                    </p>
                </div>

                {/* 3. تغيير طريقة عرض التفاصيل إلى قائمة منظمة */}
                <div className="p-6 space-y-4">

                    <div className="flex justify-between items-center">
                        <span className="font-medium text-slate-600 dark:text-slate-300">Capital</span>
                        <span className="font-semibold text-slate-900 dark:text-slate-50">{country.capital}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="font-medium text-slate-600 dark:text-slate-300">Currency</span>
                        <span className="font-semibold text-slate-900 dark:text-slate-50">{country.currency}</span>
                    </div>

                    <div>
                        <h3 className="font-medium text-slate-600 dark:text-slate-300 mb-2">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            {country.languages.map(lang => (
                                // 4. تغيير ألوان البطاقات الصغيرة (Pills)
                                <span
                                    key={lang.code}
                                    className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 dark:bg-green-900/40 dark:text-green-200 rounded-full"
                                >
                                    {lang.name}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
