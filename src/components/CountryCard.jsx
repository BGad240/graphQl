"use client"
import React from 'react'
import Link from "next/link";

const CountryCard = ({ country }) => {
    return (
        <div className="group flex flex-col justify-between bg-slate-800/50 rounded-xl border border-slate-700 shadow-xl transition-all duration-300 hover:border-pink-500 hover:-translate-y-2">
            <div className="p-6 space-y-4">
                <h2 className="font-bold text-2xl text-white">
                    {country.name}
                </h2>

                <div className="space-y-3 text-sm text-slate-300">
                    <div className="flex justify-between">
                        <span className="text-slate-400">Code:</span>
                        <span className="font-mono bg-slate-700/50 px-2 py-0.5 rounded">
                            {country.code}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-400">Capital:</span>
                        <span className="font-medium">{country.capital}</span>
                    </div>
                </div>
            </div>

            {/* قسم الرابط (Call to Action) */}
            <div className="p-4 bg-slate-800 rounded-b-xl mt-4">
                <Link href={`/countries/${country.code}`} className="block text-center font-semibold text-pink-500 group-hover:underline">
                    More Details &rarr;
                </Link>
            </div>
        </div>
    )
}

export default CountryCard