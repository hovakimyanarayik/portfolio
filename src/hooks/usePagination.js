import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { paginate } from "../helpers/paginate"

export function usePagination(data) {
    const [searchParams, setSearchParams] = useSearchParams()
    const [pageParams, setPageParams] = useState({
        page: +searchParams.get('page') || 1,
        size: +searchParams.get('size') || 6
    })
    useEffect(() => {
        setPageParams({
            page: +searchParams.get('page') || 1,
            size: +searchParams.get('size') || 6
        })
    }, [searchParams.get('page'), searchParams.get('size')])


    const onPageChange = (pageNumber, perPage) => {
        setSearchParams({
            ...Object.fromEntries(searchParams.entries()),
            size: perPage,
            page: pageNumber
        })
    }

    const chunkedData = useMemo(() => paginate(
        data, 
        pageParams.page, 
        pageParams.size
        ), [data, pageParams.page, pageParams.size]) 

    return {
        currentPage: pageParams.page,
        pageSize: pageParams.size,
        onPageChange,
        chunkedData
    }
}