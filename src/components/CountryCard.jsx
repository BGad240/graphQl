"use client"
import React from 'react'
import Link from "next/link";

const CountryCard = ({ country }) => {

    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 m-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-6">
                <h2 className="font-bold text-2xl mb-4 text-gray-900 dark:text-white">
                    <Link href={`/countries/${country.code}`}>
                        more about
                    </Link>
                </h2>

                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                        <span className="font-semibold">Population:</span> {country.name}
                    </li>
                    <li>
                        <span className="font-semibold">Code:</span> {country.code}
                    </li>
                    <li>
                        <span className="font-semibold">Capital:</span> {country.capital}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CountryCard