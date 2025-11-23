import React, { useEffect, useState } from 'react';
import { getVendors } from '../services/api';

const VendorList = () => {
    const [vendors, setVendors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVendors = async () => {
            try {
                const response = await getVendors();
                setVendors(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchVendors();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Vendor List</h1>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Vendor Name</th>
                        <th className="py-2 px-4 border-b">Contact</th>
                        <th className="py-2 px-4 border-b">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {vendors.map(vendor => (
                        <tr key={vendor.id}>
                            <td className="py-2 px-4 border-b">{vendor.name}</td>
                            <td className="py-2 px-4 border-b">{vendor.contact}</td>
                            <td className="py-2 px-4 border-b">{vendor.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VendorList;