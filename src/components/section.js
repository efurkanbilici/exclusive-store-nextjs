import PropTypes from "prop-types";
import Button from "@mui/material/Button";

export default function Section({
  children,
  className,
  title,
  description,
  actionButton,
}) {
  return (
    <section className="py-2 mt-2">
      <div className={`${className ?? ""} max-w-7xl px-4 mx-auto`}>
        {title && description && (
          <div className="flex items-center justify-center flex-col mb-4 px-4 py-8 border dark:border-gray-500">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-950 py-2 dark:dark:text-white/75">
              {title}
            </h2>
            <p className="text-gray-600 text-[15px] md:text-base max-w-xl text-center dark:text-slate-400">
              {description}
            </p>
            {actionButton && (
              <Button
                variant="contained"
                href={actionButton?.url}
                className="mt-4 scroll-m-14"
              >
                {actionButton?.label}
              </Button>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  actionButton: PropTypes.object,
};
