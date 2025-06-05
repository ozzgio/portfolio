import { Flex, HStack, Text, Heading, Box, Icon } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import EnhancedChip from './enhancedchip';

const TechnologyRow = ({ category, enableAnimation: propEnableAnimation }) => {
    const controls = useAnimation();
    const motionDivRef = useRef(null);
    const [contentWidth, setContentWidth] = useState(0);

    let animationDuration = category.technologies.length * 3;

    switch (category.title) {
        case "DevOps & Project Management":
            animationDuration = category.technologies.length * 3.5;
            break;
        case "Tools & Platforms":
            animationDuration = category.technologies.length * 5;
            break;
        case "Frontend":
            animationDuration = category.technologies.length * 2;
            break;
        case "Backend":
            animationDuration = category.technologies.length * 1.5;
            break;
    }

    useEffect(() => {
        const measureAndSetContentWidth = () => {
            if (motionDivRef.current) {
                setContentWidth(motionDivRef.current.scrollWidth / 3);
            }
        };

        let animationFrameId;
        const deferredMeasure = () => {
            animationFrameId = requestAnimationFrame(() => {
                measureAndSetContentWidth();
            });
        };
        deferredMeasure();

        window.addEventListener('resize', deferredMeasure);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', deferredMeasure);
        };
    }, [category.technologies.length]);

    useEffect(() => {
        if (!propEnableAnimation || contentWidth === 0) {
            controls.stop();
            controls.set({ x: 0 });
            return;
        }

        controls.start({
            x: -contentWidth,
            transition: {
                duration: animationDuration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
                round: { x: 0.01 },
            },
        });

        return () => {
            controls.stop();
        };
    }, [controls, propEnableAnimation, contentWidth, animationDuration]);

    const handleMouseEnter = () => {
        if (propEnableAnimation) {
            controls.stop();
        }
    };

    const handleMouseLeave = () => {
        if (propEnableAnimation && contentWidth > 0) {
            controls.start({
                x: -contentWidth,
                transition: {
                    duration: animationDuration,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 0,
                    round: { x: 0.01 },
                },
            });
        }
    };

    const handleTouchStart = handleMouseEnter;
    const handleTouchEnd = handleMouseLeave;

    return (
        <Box
            overflowX="hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <HStack justify="center" spacing={3} mb={2}>
                <Icon fontSize="2xl" > {category.icon}</Icon>
                <Heading as="h3" variant="section-title">{category.title}</Heading>
            </HStack>
            <Text color="gray.500" textAlign="center" mb={4}>
                {category.technologies.length} technologies
            </Text>
            <Flex
                flexWrap={propEnableAnimation ? "nowrap" : "wrap"}
                justifyContent={propEnableAnimation ? "flex-start" : "center"}
                gap={4}
                overflowX="hidden"
            >
                <motion.div
                    ref={motionDivRef}
                    style={{ display: 'flex', gap: '16px' }}
                    animate={controls}
                >
                    {[...category.technologies, ...category.technologies, ...category.technologies].map((tech, index) => (
                        <EnhancedChip
                            key={`${tech.name}-${index}`}
                            tech={tech}
                            delay={0}
                        />
                    ))}
                </motion.div>
            </Flex>
        </Box>
    );
};

export default TechnologyRow; 