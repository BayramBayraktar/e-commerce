import React from 'react'
import Style from './style.module.css'

//component
import Page_detail_header from '../../components/page_detail_header'

const Search_page = () => {
    return (
        <div className={Style.wrapper}>
            <Page_detail_header title={'SEARCH RESULT'} />
            <div className={Style.container}>
                <div className={Style.search_brief}>
                    167 results found for the keyword " <span className={Style.brief_mark}>Search </span> "
                </div>
                <div className={Style.search_results}>
                    <div className={Style.search_result}>
                        <div className={Style.result_titles}>
                            <span className={Style.result_title}>
                                Article little here is
                            </span>
                            <span className={Style.result_date}>
                                by lorem ipsum  | 25 november, 2015
                            </span>
                        </div>
                        <div className={Style.result_text}>
                            <p>
                                Pellentesque pulvinar dolor eu erat aliquet iaculis. Ut lacus lectus, scelerisque at mi id, pharetra mollis elit. Fusce diam mi, laoreet non luctus et, iaculis a risus. Phasellus volutpat ipsum id facilisis sagittis.
                            </p>
                        </div>
                        <div className={Style.more_btn}>
                            READ MORE
                        </div>
                    </div>

                    <div className={Style.search_result}>
                        <div className={Style.result_titles}>
                            <span className={Style.result_title}>
                                Article little here is
                            </span>
                            <span className={Style.result_date}>
                                by lorem ipsum  | 25 november, 2015
                            </span>
                        </div>
                        <div className={Style.result_text}>
                            <p>
                                Pellentesque pulvinar dolor eu erat aliquet iaculis. Ut lacus lectus, scelerisque at mi id, pharetra mollis elit. Fusce diam mi, laoreet non luctus et, iaculis a risus. Phasellus volutpat ipsum id facilisis sagittis.
                            </p>
                        </div>
                        <div className={Style.more_btn}>
                            READ MORE
                        </div>
                    </div>

                    <div className={Style.search_result}>
                        <div className={Style.result_titles}>
                            <span className={Style.result_title}>
                                Article little here is
                            </span>
                            <span className={Style.result_date}>
                                by lorem ipsum  | 25 november, 2015
                            </span>
                        </div>
                        <div className={Style.result_text}>
                            <p>
                                Pellentesque pulvinar dolor eu erat aliquet iaculis. Ut lacus lectus, scelerisque at mi id, pharetra mollis elit. Fusce diam mi, laoreet non luctus et, iaculis a risus. Phasellus volutpat ipsum id facilisis sagittis.
                            </p>
                        </div>
                        <div className={Style.more_btn}>
                            READ MORE
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Search_page