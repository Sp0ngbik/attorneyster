import style from "./RecentBlog.module.scss";
import Image from "next/image";
import {imageObject} from "@/page/utils/imageObject";
import React from "react";

const RecentBlog = () => {
    return (
        <div className={style.recentBlogs}>
            <div className={style.recentBlogHeader}>
                <h2>Recent Blogs</h2>
                <Image
                    src={imageObject.linesCenter}
                    alt="width logo on recent blog - not found"
                />
            </div>
            <div className={style.recentBlogContent}>
                <Image
                    src={imageObject.recentBlogImg}
                    alt="recent blog Image not found"
                />
                <div className={style.recentBlockDescription}>
                    <div className={style.recentBlogTitle}>
                        <span>Corporate Law</span>
                        <span className={style.dateSeparator}>|</span>
                        <span>Friday February 4, 2022</span>
                    </div>
                    <h3>
                        The Difference between <br/> Information & Legal Advice
                    </h3>
                    <span>
                Collaborative on low-hanging fruit to identify a ballpark value
                added
                <br/> activity to beta matrix economically reviewReverse override the
                digital.
              </span>
                    <p>View more</p>
                </div>
            </div>
        </div>
    );
};

export default RecentBlog;