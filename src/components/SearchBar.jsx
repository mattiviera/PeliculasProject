import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [searchType, setSearchType] = useState('title');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch({ type: searchType, query });
    };

    return (
        <form onSubmit={handleSearch} className="flex items-center justify-center gap-4">
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie..."
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-72"
        />
        <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <option value="title">Titulo</option>
            <option value="year">Año</option>
            <option value="director">Director</option>
        </select>
        <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg transition duration-300 ease-in-out hover:bg-blue-700"
        >
            Buscar
        </button>
        </form>
    );
};

export default SearchBar;
