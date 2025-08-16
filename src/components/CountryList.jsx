"use client";
import CountryCard from "./CountryCard";

export default function CountryList({ countries }) {
  return (
    <section className="container mx-auto px-4 py-8 md:px-8">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {countries.map((c) => (
          <CountryCard key={c.code} country={c} />
        ))}
      </div>
    </section>
  );
}