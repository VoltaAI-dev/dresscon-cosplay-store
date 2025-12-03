'use client'

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-24 px-4">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Products will be loaded via Volta SDK */}
        <p className="text-muted-foreground col-span-full">Loading products...</p>
      </div>
    </div>
  )
}