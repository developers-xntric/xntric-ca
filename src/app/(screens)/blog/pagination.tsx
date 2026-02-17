import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
    showPrevNext?: boolean
    maxVisiblePages?: number
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    showPrevNext = true,
    maxVisiblePages = 5,
}: PaginationProps) {
    const getVisiblePages = () => {
        const pages = []
        const halfVisible = Math.floor(maxVisiblePages / 2)

        let startPage = Math.max(1, currentPage - halfVisible)
        const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

        // Adjust start page if we're near the end
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1)
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i)
        }

        return pages
    }

    const visiblePages = getVisiblePages()

    return (
        <div className="flex items-center justify-center">
            {/* Previous Button */}
            {showPrevNext && (
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>
            )}

            {/* Page Numbers */}
            {visiblePages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium transition-colors ${page === currentPage
                        ? "bg-transparent text-white border-2 border-white"
                        : "bg-transparent text-gray-400 border border-white/70 hover:text-white hover:bg-gray-700"
                        }`}
                >
                    {page}
                </button>
            ))}

            {/* Next Button */}
            {showPrevNext && (
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            )}
        </div>
    )
}
