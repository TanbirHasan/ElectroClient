import React, { useState } from "react";
import BlogsQA from "./BlogsQA";


const Blogs = () => {
  const [activeIndex, setActiveIndex] = useState([]);
  return (
    <div className="my-24 lg:mx-16 sm:mx-5 px-3">
      <h2 className="text-3xl font-bold text-center mb-5">FAQ</h2>
      <div className="flex w-full mx-auto flex-col justify-center items-left">
        <BlogsQA
          title="Screwdrivers"
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p>
            For every screw type there is a screwdriver. For most tasks, a basic
            selection of screwdrivers, such as the ones shown in, is all you’ll
            need.However, if you plan on disassembling consumer electronics or a
            toy, then you might also need some rather odd screwdriver types. A
            set of miniature and specialty screwdrivers, such as the one shown
            in, is essential for these types of situations. You can find sets
            like this on eBay. Just bear in mind that these imported tools are
            generally not made from the highest-quality metal (that’s why they
            are so inexpensive), and they can be easily ruined if used
            incorrectly.
          </p>
        </BlogsQA>

        <BlogsQA
          title="Wire Cutters"
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div>
            <p>
              As with pliers, the typical wire cutters from the hardware store
              are suitable for cutting wires for home wiring and automotive
              work, but they are not designed for electronics. Specialty cutters
              are available with blades designed to cut flush against a surface
              to trim component leads on a printed circuit board (PCB) as close
              as possible, and some types have built-in retainers to prevent cut
              leads and wires from flying off. shows the so-called flush cutter
              type, which is most commonly used in electronics.
            </p>
          </div>
        </BlogsQA>

        <BlogsQA
          title="Crimping Tools"
          index={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div>
            <p>
              If you are working with connectors that utilize crimped terminals,
              then a crimping tool is essential. There really is no other way to
              make a good connection with these types of connectors. Rectangular
              connectors that use insertable socket terminals are readily
              available, and they come in a variety of styles and sizes.
              Crimping tools range from simple things that look like pliers to
              aerospace-grade ratcheted devices with interchangeable crimping
              parts, called dies, for different contact sizes.It shows a
              relatively inexpensive tool for working with crimp contacts like
              those used in rectangular connectors. The tools range in price
              from around $30 to well over $500.
            </p>
          </div>
        </BlogsQA>

        <BlogsQA
          title="Rotary Tools"
          index={4}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div>
            <p>
              A good rotary tool is one of the most versatile tools you can own.
              There are many types available, ranging from the very cheap and
              somewhat flimsy to substantial tools suitable for production-line
              use. Some models come with a selection of speeds, and some have
              continuously variable speed control. A rotary tool is extremely
              useful for cutting small square holes in a plastic box, trimming a
              slightly oversized printed circuit board to fit into an enclosure,
              drilling holes in a PCB, and performing other tasks that require a
              small tool with a lot
            </p>
          </div>
        </BlogsQA>

        <BlogsQA
          title="Clamps"
          index={5}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div>
            <p>
              Clamps are designed to exert pressure to hold something, whether
              that is a single piece of wire, an electronic component, or two
              pieces of metal. Clamps may be locked or screwed into position,
              and they retain the pressure on whatever they’re gripping until
              released. Technically, even a common alligator clip is a type of
              clamp, and it can be found in that role as part of so-called
              “third-hand” gadgets like the one shown. A hemostat is useful when
              you need to hold some parts in place for soldering, such as two
              pieces of wire or component leads. They are also useful for
              holding things while an adhesive sets or for just keeping
              something out of the way.
            </p>
          </div>
        </BlogsQA>
      </div>
    </div>
  );
};

export default Blogs;
